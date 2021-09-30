import { cleanup, render, screen } from "@testing-library/react"
import App from '../App'
import { BrowserRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"
import { QueryClient, QueryClientProvider } from "react-query"

// Prosjektet skal vise oppsett av og eksempel på testing med Jest - minimum er å ha en snapshottest og noen enkle tester på komponentenes oppførsel.

beforeEach(() => {
  return render(
    <QueryClientProvider client={new QueryClient()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </QueryClientProvider>
    )
  }
)
afterEach(cleanup)

it("renders the header correctly", () => {
  expect(<App></App>).toMatchSnapshot()
})


describe("Checking the routing of the header", () =>{

  it("Should be on the home page", () => {
    expect(location.pathname).toEqual("/")
  })
  
  it("Re-routes to branches when branches-link is clicked", async () => {
    act(() => {
      const branchLink = screen.getByText("Branches") 
      branchLink.click()
    })
    expect(location.pathname).toEqual("/branches")
  })
  
  it("Re-routes to issues when issues-link is clicked", async () => {
    act(() => {
      const issueLink = screen.getByText("Issues") 
      issueLink.click()
    })
    expect(location.pathname).toEqual("/issues")
  })
  
  it("Re-routes to commit-messages when commit-link is clicked", async () => {
    act(() => {
      const commitLink = screen.getByText("Commit messages") 
      commitLink.click()
    })
    expect(location.pathname).toEqual("/messages")
    
  })
  
  it("Re-routes to contributors when contributor-link is clicked", async () => {
    act(() => {
      const contributorLink = screen.getByText("Contributors") 
      contributorLink.click()
    })
    expect(location.pathname).toEqual("/contributors")
  })
  
})