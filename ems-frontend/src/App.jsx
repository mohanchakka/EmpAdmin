
import './App.css'
import HelloWorld from './HelloWorls'
import EmployeeComponent from './components/EmployeeComponent'
import Fotter from './components/Fotter'
import Header from './components/Header'
import ListEmployesComponent from './components/ListEmployes'
import ListEmployes from './components/ListEmployes'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  console.clear();
  
  

  return (
    <>
    <BrowserRouter>
      <Header /> {/* Render the Header component */}
      
      <Routes> {/* Routes should contain Route elements */}
        <Route path="/employee" element={<ListEmployesComponent />} /> {/* Define the route path and the component to render */}
        <Route path='/add-employee' element={<EmployeeComponent/>}/>
        <Route path='/edit-employee/:id' element={<EmployeeComponent/>}/>

      </Routes>
      
      <Fotter /> {/* Render the Footer component */}
    </BrowserRouter>
      
    </>
  )
}

export default App
