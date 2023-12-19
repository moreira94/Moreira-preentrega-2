import "./App.css"
import './styles/style.scss'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contacto } from "./components/contacto/Contacto.jsx"
import { Nosotros } from "./components/nosotros/Nosotros.jsx"
import { Index } from "./components/index/Index.jsx"
import { Footer } from "./components/Footer/Footer.jsx"

function App() {

  return (
      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route path="/Index" element={<Index />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Item/:id" element={<ItemDetailContainer />} />
          <Route path="/movies/:decada" element={<ItemListContainer />} />



        </Routes>

        <Footer />
      </BrowserRouter>
  )
}

export default App

