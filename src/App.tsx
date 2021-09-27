import { ChakraProvider } from "@chakra-ui/react"
import { Branch, getBranches } from "./api/index"
import "./App.css"
import BranchTree from "./components/branchTree/BranchTree"
import Header from "./components/Header/Header"
import { HashRouter, Route } from 'react-router-dom'


function App() {
  async function test() {
    try {
      let c: Branch[] = await getBranches()
      if (c) {
        console.log(c)
      }
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <ChakraProvider>
      <HashRouter>
        <Header/>
        <div id="graph-container">
        <Route path="/Branches" component={BranchTree}></Route>
        </div>
        <Route path="test"> 
          <p>Hello World!</p>
          <button onClick={test}>click</button>
        </Route>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App
