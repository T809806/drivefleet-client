
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

// ✅ CONTEXT
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);

      setLoading(false);

    });

    return () => {
      unsubscribe();
    };

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

// ✅ CUSTOM HOOK
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;