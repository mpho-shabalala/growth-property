import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState, createContext } from "react";
import { db, storage } from "../utils/firebase/firebase";
import type { PropertyType } from "../types";
import { getDownloadURL, ref } from "firebase/storage";
import {chat} from '../utils/chatbot/chat';

chat("hey");
interface PropertiesType {
  properties: PropertyType[];
  currentProperty: PropertyType | null;
  isLoading: boolean;
  error: unknown;
  getProperty: (id: string) => Promise<PropertyType | null>;
}

const PropertiesContext = createContext<PropertiesType | undefined>(undefined);

const PropertiesProvider = ({ children }: { children: React.ReactNode }) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentProperty, setCurrentProperty] = useState<PropertyType | null>(null);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    async function fetchProperties() {
      setIsLoading(true);
      try {
        const snapshot = await getDocs(collection(db, "property-data"));
        const props: PropertyType[] = [];

        for (const doc of snapshot.docs) {
          const data = doc.data() as Omit<PropertyType, "id" | "images"> & {
            images: string[];
          };

          const urls = await Promise.all(
            data.images.map((path) =>
              path.startsWith("http")
                ? Promise.resolve(path)
                : getDownloadURL(ref(storage, path))
            )
          );

          props.push({ id: doc.id, ...data, images: urls });
        }

        setProperties(props);
      } catch (err: any) {
        setError(err);
        console.log(err)
      } finally {
        setIsLoading(false);
      }
    }

    fetchProperties();
  }, []);

  async function getProperty(id: string): Promise<PropertyType | null> {
    setIsLoading(true);
    try {
      const docRef = doc(db, "property-data", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data() as Omit<PropertyType, "id" | "images"> & {
          images: string[];
        };

        const urls = await Promise.all(
          data.images.map((path) =>
            path.startsWith("http")
              ? Promise.resolve(path)
              : getDownloadURL(ref(storage, path))
          )
        );

        const property: PropertyType = { id: docSnap.id, ...data, images: urls };
        setCurrentProperty(property);
        return property;
      } else {
        throw new Error("Property not found");
      }
    } catch (err: any) {
      setError(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        currentProperty,
        isLoading,
        error,
        getProperty,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

function useProperties() {
  const context = useContext(PropertiesContext);
  if (context === undefined)
    throw new Error("useProperties must be used within a PropertiesProvider");
  return context;
}

export { useProperties, PropertiesProvider };