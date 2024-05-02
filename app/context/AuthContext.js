import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useState(() => {
    //onAuthStateChanged
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user)
      } else {
        setIsAuthenticated(false);
        setUser(null)
      }
    });

    return unsub;
  }, []);


  const login = async (email, password) => {
    try {
    } catch (e) {}
  };

  const logout = async () => {
    try {
    } catch (e) {}
  };

  const register = async (email, password, username, profileUrl) => {
    try {
      setLoading(true)
      const response = await createUserWithEmailAndPassword(auth,email,password)
      setLoading(false)
      console.log(response)

    //   await setDoc(doc(db,"users",response?.user?.uid),{
    //     username,profileUrl,userId:response?.user?.uid
    //   })
     return {success:true, data:response?.user?.uid} 

    } catch (e) {
      return{success:false, msg:e.message}
      console.log(e)
      setLoading(false)
    }
  };

  return (
    <AuthContext.Provider value={{ loading, isAuthenticated,register }}>
      {children}
    </AuthContext.Provider>
  );
};
