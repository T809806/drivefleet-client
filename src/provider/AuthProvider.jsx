
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

    // 🔵 Firebase auth state
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {

      if (currentUser?.email) {

        // 🔥 ALSO CHECK BACKEND JWT SESSION
        try {
          const res = await fetch("http://localhost:5000/me", {
            credentials: "include",
          });

          const data = await res.json();

          if (data?.user) {
            setUser(currentUser); // keep firebase user
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