import { NextUIProvider } from "@nextui-org/react";
import "./App.css";
import MainWrapper from "./MainWrapper";
function App() {
  return (
    <NextUIProvider>
      <MainWrapper />
    </NextUIProvider>
  );
}

export default App;
