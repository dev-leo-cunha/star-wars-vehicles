import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Vehicles } from "./pages/Vehicles"
import  Checkout  from "./pages/Checkout"
import { createStore, Store } from "./mobX/Store"
import { createContext } from "react"

export const StoreContext = createContext<Store | null>(null)
const App = () => {
  const store = createStore();

  return (
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Vehicles />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </StoreContext.Provider>
  )
}

export default App
