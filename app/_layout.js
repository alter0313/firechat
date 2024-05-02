import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { Slot, SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import { useFonts } from "expo-font";

const MainLayout = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (typeof isAuthenticated === "undefined") return;
    console.log(segments)
    const inApp = segments[0] == "app";
    if (isAuthenticated && !inApp) {
      //redirect to home
      router.replace('home')
    } else if (isAuthenticated == false) {
      //redirect to signin
      router.replace('signin')
    }
  }, [isAuthenticated]);

  return <Slot />;
};
const RootLayout = () => {
  
    const [fontsLoaded, error] = useFonts({
      "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
      "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
      "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
      "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
      "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
      "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
      "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
      "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
      "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    });
  
    useEffect(() => {
      if (error) throw error;
      if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);
  
    if (!fontsLoaded && !error) return null;

  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
};

export default RootLayout;
