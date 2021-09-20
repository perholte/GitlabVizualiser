import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import { Commit, getCommits } from "./api/index"
import "./App.css"

function App() {
  async function test() {
    try {
      let c: Commit[] = await getCommits(5)
      if (c) {
        console.log(c)
      }
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <ChakraProvider>
      <p>Hello World!</p>
      <button onClick={test}>click</button>
    </ChakraProvider>
  )
}

export default App
