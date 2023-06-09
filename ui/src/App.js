import { NextUIProvider } from "@nextui-org/react";
import MainWrapper from "./MainWrapper";

function App() {
  return (
    <NextUIProvider>
      <MainWrapper />
    </NextUIProvider>
  );
}

export default App;
