import { useState, useCallback, useEffect, useMemo } from "react";
import { useParams, useLocation, useHistory, useRouteMatch } from "react-router-dom";
import queryString from "query-string";

//Many hooks here are modified versions from usehooks.com

const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState("settled");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((response) => {
        setValue(response);
        setStatus("success");
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};

const useAuth = () => {
  // // Add your Firebase credentials
  // firebase.initializeApp({
  //     apiKey: "",
  //     authDomain: "",
  //     projectId: "",
  //     appID: "",
  //   });
  //   const authContext = createContext();
  //   // Provider component that wraps your app and makes auth object ...
  //   // ... available to any child component that calls useAuth().
  //   export function ProvideAuth({ children }) {
  //     const auth = useProvideAuth();
  //     return <authContext.Provider value={auth}>{children}</authContext.Provider>;
  //   }
  //   // Hook for child components to get the auth object ...
  //   // ... and re-render when it changes.
  //   export const useAuth = () => {
  //     return useContext(authContext);
  //   };
  //   // Provider hook that creates auth object and handles state
  //   function useProvideAuth() {
  //     const [user, setUser] = useState(null);
  //     // Wrap any Firebase methods we want to use making sure ...
  //     // ... to save the user to state.
  //     const signin = (email, password) => {
  //       return firebase
  //         .auth()
  //         .signInWithEmailAndPassword(email, password)
  //         .then((response) => {
  //           setUser(response.user);
  //           return response.user;
  //         });
  //     };
  //     const signup = (email, password) => {
  //       return firebase
  //         .auth()
  //         .createUserWithEmailAndPassword(email, password)
  //         .then((response) => {
  //           setUser(response.user);
  //           return response.user;
  //         });
  //     };
  //     const signout = () => {
  //       return firebase
  //         .auth()
  //         .signOut()
  //         .then(() => {
  //           setUser(false);
  //         });
  //     };
  //     const sendPasswordResetEmail = (email) => {
  //       return firebase
  //         .auth()
  //         .sendPasswordResetEmail(email)
  //         .then(() => {
  //           return true;
  //         });
  //     };
  //     const confirmPasswordReset = (code, password) => {
  //       return firebase
  //         .auth()
  //         .confirmPasswordReset(code, password)
  //         .then(() => {
  //           return true;
  //         });
  //     };
  //     // Subscribe to user on mount
  //     // Because this sets state in the callback it will cause any ...
  //     // ... component that utilizes this hook to re-render with the ...
  //     // ... latest auth object.
  //     useEffect(() => {
  //       const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //         if (user) {
  //           setUser(user);
  //         } else {
  //           setUser(false);
  //         }
  //       });
  //       // Cleanup subscription on unmount
  //       return () => unsubscribe();
  //     }, []);
  //     // Return the user object and auth methods
  //     return {
  //       user,
  //       signin,
  //       signup,
  //       signout,
  //       sendPasswordResetEmail,
  //       confirmPasswordReset,
  //     };
  //   }
};

const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history,
    };
  }, [params, match, location, history]);
};

const useRequireAuth = (redirectUrl = "/signup") => {
  //   const auth = useAuth();
  //   const router = useRouter();
  //   // If auth.user is false that means we're not
  //   // logged in and should redirect.
  //   useEffect(() => {
  //     if (auth.user === false) {
  //       router.push(redirectUrl);
  //     }
  //   }, [auth, router]);
  //   return auth;
};

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export { useRequireAuth, useAsync, useLocalStorage, useRouter };
