import React from 'react'
import {NavLink} from "react-router-dom";

function Navigation() {
  return (
   <div>
<div class="container">
		<section class="main-logo">
			<NavLink to="/">
        <img src="images/ashirbad-paints-logo.png" alt="Ashirbad Paints Logo" />
      </NavLink>
		</section>
	</div>

    <nav className="navbar sticky-top navbar-expand-lg navbar-light shadow-sm">
      <div className="container">
      <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
        <li className="nav-item"><NavLink className="nav-link" to="/"><i className="fas fa-home"></i> Home</NavLink></li>   

        <li className="nav-item dropdown">
       <NavLink className="nav-link dropdown-toggle" to="/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-users"></i> About Us
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="/about">Who We Are?</NavLink></li>
            <li><NavLink className="dropdown-item" to="members.php">Board Members</NavLink></li>
          </ul>
        </li>

        <li className="nav-item"><NavLink className="nav-link" to="/projects"><i className="fas fa-paint-roller"></i> Projects</NavLink></li>
        
        <li className="nav-item"><NavLink className="nav-link" to="events.php"><i className="far fa-calendar-check"></i> Events</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="download.php"><i className="fas fa-file-download"></i> Download</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="wallpapers.php"><i className="far fa-image"></i> Wallpapers</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="faq.php"><i className="far fa-question-circle"></i> FAQ</NavLink></li>
        
        <li className="nav-item"><NavLink className="nav-link" to="contact.php"><i className="fas fa-envelope"></i> Contact</NavLink></li>
          
        </ul>
        
        <div className="d-flex">
            <NavLink className="btn btn-light mx-auto" to="products.php" role="button"><i className="fas fa-clipboard-list me-1"></i> PRODUCTS</NavLink>
          </div>
      </div>
      </div>
    </nav>
    </div>
  )
}

export default Navigation