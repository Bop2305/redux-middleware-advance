import React from "react";
import Header from "./components/Header";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

const App = ({ children }: { children: React.ReactNode }) => {
  return <>
    <ThemeProvider theme={theme}>
      <Header />
      {children}
    </ThemeProvider>
  </>
}

export default App;