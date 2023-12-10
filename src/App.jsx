import "./App.css"
import './styles/style.scss'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { NavBar } from './components/NavBar/NavBar.jsx'

function App() {

  return (
      <div>
        <NavBar />
        <h1>Productos</h1>
        <ItemListContainer />
      </div>
  )
}

export default App

