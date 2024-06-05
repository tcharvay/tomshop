
import './App.css'
import './styles/NavBar.css'
import './styles/ItemListContainer.css'

import './styles/CartWidget.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Contact from './components/Contact'






function App() {


  return (
    <div>
      <BrowserRouter>
        < NavBar />

        <Routes>
            <Route path= '/' element={< ItemListContainer />} />
            <Route path= '/ItemListContainer' element={< ItemListContainer />} />
            <Route path= '/item/:id' element={< ItemDetailContainer />} />
            <Route path= '/contact' element={ < Contact />} />
        </Routes>      
        
        

      </BrowserRouter>
    </div>
  )
}

export default App
