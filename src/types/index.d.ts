export interface PropertyType{
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    city: string;
    suburb: string;
    address: string;
  };
  bedrooms: number;
  bathrooms: number;
  sizeSqm: number;
  images: string[];
  sold: boolean;
  createdAt: Timestamp;
};

export interface MessageType{
  httpCode: number,
  status: string,
  err_message?: string,
  statusCode: string,
  data: {
    message: string | null
  }
}

export interface LocationType{
  address: string,
  city: string,
  suburb: string
}