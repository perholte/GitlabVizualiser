import { cleanup, render, screen } from "@testing-library/react"
import App from '../App'
import { BrowserRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"
import { QueryClient, QueryClientProvider } from "react-query"

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

jest.mock("../__mocks__/request")


it("renders the header correctly", () => {
  
  const button = screen.getByText("Issues")
  expect(button).toBeInTheDocument()
})


describe("Checking routing logic", () => {

  
  it("Should not containt an SVG-element yet", () => {
    expect(document.body).not.toContain("svg")
  })

  it("Re-routes to branches when branches-link is clicked", async () => {
    act(() => {
      const commitLink = screen.getByText("Branches") 
      commitLink.click()
    })
    const svg = screen.findByRole("svg")
    await expect(svg).toBeDefined()
  })

  it("Re-routes to issues when issues-link is clicked", async () => {
    act(() => {
      const commitLink = screen.getByText("Issues") 
      commitLink.click()
    })
    const svg = screen.findByRole("div")
    await expect(svg).toBeDefined()
  })

  it("Re-routes to commit-messages when commit-link is clicked", async () => {
    act(() => {
      const commitLink = screen.getByText("Commit messages") 
      commitLink.click()
    })
    const svg = screen.getByText("Commit message")
    await expect(svg).toBeDefined()
  })

})
