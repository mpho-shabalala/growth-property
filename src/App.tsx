// src/App.tsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Properties from "./pages/properties";
import { PropertiesProvider } from "./contexts/PropertiesContext";
import { MessageProvider } from "./contexts/chatbotContext";
import Homepage from "./pages/Homepage";
import PropertyPage from "./pages/PropertyPage";
import Contactpage from "./pages/Contactpage";
// import PropertyDetail from "./components/PropertyDetail";

function App() {
  return (
    <Router>
      <PropertiesProvider>
        <MessageProvider>
          <Routes>
            <Route index path='/' element={<Homepage/>} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyPage />} />
            <Route path="/contact" element={<Contactpage />} />
          </Routes>
        </MessageProvider>
      </PropertiesProvider>
      
    </Router>
  );
}



export default App;
