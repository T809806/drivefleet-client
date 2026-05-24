import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import {
  getAuth,
  onAuthStateChanged
} from "firebase/auth";

import app from "../firebase/firebase.config";
export const AuthContext = createContext();

     const auth = getAuth(app);
     const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

 useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser?.email) {

 try {

   const res = await fetch(`${import.meta.env.VITE_API_URL}/me`, {
   credentials: "include",

});

 const data = await res.json();
  if (data?.user) {

  setUser(currentUser); 
 } else {
setUser(null);

}

} catch (err) {
    setUser(null);
    
  }

 } else {
   setUser(null);

 }

setLoading(false);

 });

 return () => unsubscribe();

  }, []);

  const authInfo = {
    user,
    setUser,
    loading
  };

  return (

    <AuthContext.Provider value={authInfo}>

      {children}
      
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;