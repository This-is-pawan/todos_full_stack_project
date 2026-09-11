"use client";

import axios from "axios";
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";

interface ContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  auth_user_data: any;
  set_auth_user_data: React.Dispatch<React.SetStateAction<any>>;
  auth_user_create_data: any;
  set_auth_user_create_data: React.Dispatch<React.SetStateAction<any>>;
  GetAuthUser: () => Promise<void>;
}

const CreateContext = createContext<ContextType | undefined>(undefined);

const Contextapi = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [auth_user_data, set_auth_user_data] = useState<any>(null);
  const [auth_user_create_data,  set_auth_user_create_data] = useState<any>(null);

  const GetAuthUser = async () => {
    setLoading(true);

    try {
      const result = await axios.get("/api/auth/me", {
        withCredentials: true,
      });

      if (result.data) {
      
        set_auth_user_create_data(result?.data?.todos)
        set_auth_user_data(result?.data?.user);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  // user create todo 


  
  useEffect(() => {
    GetAuthUser();
  }, []);

  return (
    <CreateContext.Provider
      value={{
        auth_user_data,
        set_auth_user_data,
        auth_user_create_data,set_auth_user_create_data,
        loading,
        setLoading,
        GetAuthUser,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export const GlobalContext = () => {
  const context = useContext(CreateContext);

  if (!context) {
    throw new Error("GlobalContext must be used inside Contextapi");
  }

  return context;
};

export default Contextapi;