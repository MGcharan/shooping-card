
 import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function App() {
  const [cartValue, setCartValue] = useState(0);
  return (
    <div style={{backgroundColor:"#f2f2f2"}}>
      <Navbar cartValue={cartValue} />
      <Header />
     
      <div>
        <div className="container pl-4">
          <div className="row">
           
            <Product setCartValue={setCartValue}></Product>
           
          </div>
        </div>
       <Footer/> 
      </div>
    </div>
  );
}

export default App;