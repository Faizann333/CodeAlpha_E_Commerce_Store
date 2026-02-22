import axios from "axios";
import { useState,useEffect,createContext } from "react";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/get-me`, { withCredentials: true });
                if(response.data.success){
                    setUser(response.data.user);
                    console.log(" data",response.data.user);
                }
            } catch (error) {
                setUser(false);
            }   
        };
        checkAuth();
    }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}