import axios from "axios";
import { useState,useEffect,createContext } from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

       const handleLogout = () => {
              axios.post(`${API_BASE_URL}/auth/logout`, {}, { withCredentials: true })
                  .then((res) => {
                      setUser(false);
                      toast.success("Logout successful!");
                  })
                  .catch((err) => {
                      console.log(err);
                  });
         };
      
      

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/auth/get-me`, { withCredentials: true });
                if(response.data.success){
                    setUser(response.data.user);
                    
                }
            } catch (error) {
                setUser(false);
            } finally {
                setLoading(false);
            } 
        };
        checkAuth();
    }, []);

  return (
    <AuthContext.Provider value={{ user, setUser , loading , handleLogout}}>
      {children}
    </AuthContext.Provider>
  );
}