import { cleanup, render, screen } from "@testing-library/react"
import App from '../App'
import { BrowserRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"

beforeEach(() => {
  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>)
  }
)

afterEach(cleanup)


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
      commitLink.dispatchEvent(new MouseEvent("click", {bubbles: true}))
    })
    const svg = screen.findByRole("svg")
    await expect(svg).toBeDefined()
  })
})
