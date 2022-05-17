import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {ThemeProvider} from "react-native-magnus";
import App from "./App";

export function Main() {
  const theme = {
    fontSize: {
      text100: 10,
      text200: 12,
      text300: 14,
      text400: 16,
      text500: 18,
      text600: 20,
      text700: 22,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </ThemeProvider>
  );
}
