// import React, { useEffect, useState } from "react";
// import { useRouter } from "expo-router";

// const Index = () => {
//   const router = useRouter();
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     // Wait for layout to mount before redirecting
//     const timeout = setTimeout(() => {
//       setIsReady(true);
//     }, 100); // Delay to ensure layout has mounted

//     return () => clearTimeout(timeout);
//   }, []);

//   useEffect(() => {
//     if (isReady) {
//       // Redirect to the (tabs) folder
//       router.replace("/(tabs)");
//     }
//   }, [isReady, router]);

//   return null; // No UI needed for this redirection
// };

// export default Index;


import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase Auth

const Index = () => {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const auth = getAuth(); // Initialize Firebase Auth
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is logged in, navigate to (tabs)
        router.replace("/(tabs)");
      } else {
        // If user is not logged in, navigate to auth/login
        router.replace("/(auth)");
      }
      setIsReady(true); // Mark the check as complete
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, [router]);

  if (!isReady) {
    return null; // Optional: Add a loading screen here if needed
  }

  return null; // No UI needed for redirection
};

export default Index;
