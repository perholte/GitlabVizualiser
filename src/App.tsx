import { ChakraProvider } from "@chakra-ui/react"
import "./App.css"
import BranchTree from "./components/branchTree/BranchTree"
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {

  return (
    <ChakraProvider>
        <Header/> 
      <Router basename="localhost:3000/">
        <Route exact path="/branches">
        <BranchTree/>
        </Route>
      </Router>
    </ChakraProvider>
  )
}

export default App
