import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home";

import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Home />
    </>
  );
}
