// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Navbar = ({cartValue}) => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg" style={{background:'lightgrey'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" ><img src="./images/ban1.png" alt="logo" style={{width:'10rem',position:'relative', left:'60px'}}/></a>
    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon border-0"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 pt-2">
        <li className="nav-item  " >
          <a className="nav-link active" aria-current="page" href="#" style={{width:'8rem',position:'relative', left:'80px'}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{width:'8rem',position:'relative', left:'75px'}}>Shop</a>
        </li>
       
      </ul>
      <form className="d-flex" role="search" style={{position:'fixed',right:'50px'}}>
       
        <button className="btn btn-outline-success" type="submit"><i className="fa-solid fa-cart-shopping rounded-circle"><span className="badge bg-dark text-white ms-1 rounded-circle " >{cartValue}</span></i>

        </button>
      </form>
    </div>
  </div>
</nav>

</>
  )
}

export default Navbar