import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'
import './App.css'
import { MainLayouts } from './layouts/MainLayouts'
import { AdminLayouts } from './layouts/AdminLayouts'
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida'
import { Login } from './components/Login/Login'
import { Menos7000 } from "./components/Menos7000/Menos7000";


function App() {
  
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          {/* <Header /> */}
            <Routes>
              <Route element={<MainLayouts />}>
                {/* <Route path='/' element={<ItemListContainer titulo={"Bienvenidos a Trastiesto, nuestros productos"} />}/>    */}
                {/* <Route path='/category/:category' element={<ItemListContainer titulo={"Productos por categoria: "} />}/>          */}
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:category' element={<ItemListContainer />} />
                <Route   path="/menos-7000"   element={<ItemListContainer maxPrice={7000} />}
/>

                <Route path='/detail/:id' element={<ItemDetailContainer />} />
                <Route path='/carrito' element={<Cart/>} />
              </Route>
              
              <Route path='/admin' element={<AdminLayouts/>}>
                <Route index element={<Login />} />
                <Route 
                  path='alta-productos'
                  element={
                    <RutaProtegida>
                      <ProductFormContainer/>
                    </RutaProtegida>
                  }/>
              </Route>
              {/* <Route path='/admin' element={<ProductFormContainer/>} /> */}                         
            </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App