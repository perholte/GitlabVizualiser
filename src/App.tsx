import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import Contributions from "./components/contributions/Contributions";

function App() {
  return (
    <ChakraProvider>
      <Contributions />
    </ChakraProvider>
  );
}

export default App;
