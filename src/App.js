import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Navigation from './components/Navigation';
import Profile from './pages/Profile'
import Footer from './components/Footer';
import Test from './pages/Test';
import Blog from './pages/Blog';
import Form from './pages/Form';

function App()
{
  global.url = "https://adminpanel.krity.com.np/";
  return (
    <div className="App">
<Navigation /> 

   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/blog" element={<Blog />} />
     <Route path="/test" element={<Test />} />
     <Route path="/form" element={<Form />} />
     <Route path="/contact" element={<Contact />}  />
     <Route path="/profile/:user" element={<Profile />}  />
     <Route path="*" element={<Notfound />}  />
   </Routes>

<Footer></Footer>
    </div>
  );
}

export default App;
