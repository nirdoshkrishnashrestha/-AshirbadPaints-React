import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';

function Home() {

    const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get('https://adminpanel.krity.com.np/api/welcome').then(response => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  console.log(post);
  return(
    
    <div>
      <section className="slider-banner">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
                  
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"  
        className="active" aria-current="true"  aria-label="Slide 1"></button>
                
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"  aria-label="Slide 2"></button>
                
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"  aria-label="Slide 3"></button>
                
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"  aria-label="Slide 4"></button>
            
      </div>
      <div className="carousel-inner">
            
      <div className="carousel-item  active  ">
          <img src="images/slider/ashirbad-paints-slider-1.jpg" className="d-block w-100" alt="Banner 01" />
        </div>
           
      <div className="carousel-item  ">
          <img src="images/slider/bg.jpg" className="d-block w-100" alt="Banner 02" />
        </div>
            
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </section>     
     
       <section className="welcome">
         <div className="container">
         <div className="row d-flex justify-content-between align-items-center">
           <div className="col-lg-5 col-md-6">
             
           <div className="welcome-img">
           <img src={global.url+"uploads/homepage/"+post.image_title} alt=""/>
             </div>
             
           </div>
           <div className="col-lg-7 col-md-6">
             <div className="welcome-txt">
                                     
               <h1>{ post.title }</h1>
               
               { post.content }
              
             </div>
           </div>
         </div>
         </div>
       </section>
       
    
<section className="color-tools">
<div className="container">
<div className="row">

  <div className="col-lg-3">
  <a href="asa">
  <div className="tool-col-1">
  <div className="tool-icon">
  <img src="images/calculator.png" alt=""/>
  </div>
  <h2><span>Paint</span><br />Calculator</h2>
  </div>
  </a>
  </div>

  <div className="col-lg-3">
  <a href="projects.php">
  <div className="tool-col-2">
  <div className="tool-icon">
  <img src="images/virtual-paint.png" alt=""/>
  </div>
  <h2><span>Some of</span><br/>Our Projects</h2>
  </div>
  </a>
  </div>

  <div className="col-lg-3">
  <a href="xcz">
  <div className="tool-col-3">
  <div className="tool-icon">
  <img src="images/brochure.png" alt="" />
  </div>
  <h2><span>Download</span><br />Brochure</h2>
  </div>
  </a>
  </div>

  <div className="col-lg-3">
  <a href="asas">
  <div className="tool-col-4">
  <div className="tool-icon">
  <img src="images/color-palette.png" alt=""/>
  </div>
  <h2><span>Color</span><br/>Catalog</h2>
  </div>
  </a>
  </div>
  
</div>
</div>
</section>    
      
       <section className="features">
         <div className="container">
         <div className="row d-flex justify-content-between align-items-center">
           <div className="col-lg-5 col-md-6">
             <div className="features-txt">
               <h1>Excellent &<br/>
               Durable Quality!</h1>
               <p><strong>Shades that lend life to the walls and make them look natural and fresh are excellent for your dream home.</strong></p>
             </div>
           </div>
           <div className="col-lg-7 col-md-6">
           <div className="features-img">
             <img src="images/features-ashirbad-paints.png" alt=""/>
             </div>
           </div>
           
         </div>
         </div>
       </section>
       
       
       <section className="products-home">
         <div className="container">
         <div className="row d-flex justify-content-between align-items-center">
           <div className="col-lg-5 col-md-6">
           <div className="products-home-img">
             <img src="images/products-ashirbad-paints.png" alt=""/>
             </div>
           </div>
           <div className="col-lg-7 col-md-6">
             <div className="products-home-txt">
               <h1>Explore<br/>
               Our Products</h1>
      <p><strong>Our extensive product line has been carefully crafted to meet your needs in every manner.</strong></p>
               {/* <a href="#" className="btn btn-outline-primary" role="button"><i className="fas fa-search"></i> Explore More</a> */}
             </div>
           </div>
         </div>
         </div>
       </section>
       
       
       <section className="products-range">
         <div className="container">
           <div className="row d-flex justify-content-between align-items-center">
           <div className="col-lg-5 col-md-6">
             <div className="products-range-txt">
               <h1>Our Products<br/>
                Range</h1>
      <p><strong>Choose a shade from our wide range of products and shades that suits best for your dream house.</strong></p>
             </div>
           </div>
         <div className="col-lg-7 col-md-6">
           <div className="row">
             <div className="col-lg-4 mb-5">
               <a href="aa">
                 <div className="range-features">
                 <div className="range-icons">
                   <img src="images/icons/2-1.png" alt="Ashirbad Paints"/>
                 </div>
                 <h2>Interiors</h2>
               </div>
               </a>
             </div>
             
             <div className="col-lg-4 mb-5">
               <a href="ssd">
                 <div className="range-features">
                 <div className="range-icons">
                   <img src="images/icons/1-1.png" alt="Ashirbad Paints"/>
                 </div>
                 <h2>Exteriors</h2>
               </div>
               </a>
             </div>
             
             <div className="col-lg-4 mb-5">
               <a href="aa">
                 <div className="range-features">
                 <div className="range-icons">
                   <img src="images/icons/3-1.png" alt="Ashirbad Paints"/>
                 </div>
                 <h2>Waterproofing</h2>
               </div>
               </a>
             </div>
             
             <div className="col-lg-4 mb-5">
               <a href="aa">
                 <div className="range-features">
                 <div className="range-icons">
                   <img src="images/icons/5-1.png" alt="Ashirbad Paints"/>
                 </div>
                 <h2>Metal Finishing</h2>
               </div>
               </a>
             </div>
             
             <div className="col-lg-4 mb-5">
               <a href="ss">
                 <div className="range-features">
                 <div className="range-icons">
                   <img src="images/icons/4-1.png" alt="Ashirbad Paints"/>
                 </div>
                 <h2>Wood Finishing</h2>
               </div>
               </a>
             </div>
             
             <div className="col-lg-4 mb-5">
               <a href="aa">
                 <div className="range-features">
                 <div className="range-icons">
                   <img src="images/icons/6-1.png" alt="Ashirbad Paints"/>
                 </div>
                 <h2>Undercoats</h2>
               </div>
               </a>
             </div>
             
             
           </div>
           </div>
         </div>
         </div>
       </section>
 
   
   <section className="testimonials-home">
     <div className="container">
       <h1 className="mb-5">our<br/>
   happy customers</h1>
   <div className="row">
     <div className="col-lg-6">
     <h2>corporate customer</h2>
     <div className="regular slider responsive">
       
       <div className="partners-image">
         <img src="images/customer/corporate/aaroha.jpg" alt='' />
       </div>
     <div className="partners-image">
         <img src="images/customer/corporate/active-builders.jpg" alt='' />
       </div>
       <div className="partners-image">
         <img src="images/customer/corporate/design-cube.jpg" alt='' />
       </div>
       <div className="partners-image">
         <img src="images/customer/corporate/hcrc.jpg" alt='' />
       </div>
       <div className="partners-image">
         <img src="images/customer/corporate/it-traders.jpg" alt='' />
       </div>
       <div className="partners-image">
         <img src="images/customer/corporate/kshamadevi-group.jpg" alt='' />
       </div>
       <div className="partners-image">
         <img src="images/customer/corporate/sagarmatha.jpg" alt=''/>
       </div>
       <div className="partners-image">
         <img src="images/customer/corporate/venus.jpg" alt=''/>
       </div>
     </div>
     </div>
               <div className="col-lg-6">
           <h2>retail customer</h2>
                   <div id="testimonial-slider" className="owl-carousel">
                       <div className="testimonial">
                           <div className="pic">
                               <img src="images/customer/retail/ashok.jpg" alt=""/>
                           </div>
                           <div className="testimonial-content">
                               <h3 className="title">Ashok Bhatta</h3>
                               <span className="post">(Mahendra Nagar)</span>
                               <p className="description">
                                   Choosing the color for a new house was a little bit tricky for me, I was in dilemma. The specialists helped in color selection and accepted color changes just one day before painting.
                               </p>
                           </div>
                       </div>
                       <div className="testimonial">
                           <div className="pic">
                               <img src="images/customer/retail/chhabi.jpg" alt="" />
                           </div>
                           <div className="testimonial-content">
                               <h3 className="title">Chhabi Dangol</h3>
                               <span className="post">(Birtamode)</span>
                               <p className="description">
                                   I like Ashirbad Paints because the quality of this paint is just awesome. I used Ashirbad paints in 2013, and I find this paint very durable. It also protects my house from extreme weather.
                               </p>
                           </div>
                       </div>
             <div className="testimonial">
                           <div className="pic">
                               <img src="images/customer/retail/diwakar.jpg" alt="" />
                           </div>
                           <div className="testimonial-content">
                               <h3 className="title">Diwakar Shah</h3>
                               <span className="post">(Kirtipur)</span>
                               <p className="description">
                                   We painted entire house walls with Ashirbad Paints. Only two coats were sufficient. The coverage was great and dries to a lovely finish. Easy to apply via roller and cutting in is easy as the paint flows well.
                               </p>
                           </div>
                       </div>
             <div className="testimonial">
                           <div className="pic">
                               <img src="images/customer/retail/roman.jpg" alt="" />
                           </div>
                           <div className="testimonial-content">
                               <h3 className="title">Roman Kafle</h3>
                               <span className="post">(Dhangadhi)</span>
                               <p className="description">
                                   The price and the finish were really worth it. No item was damaged during painting. I highly recommend Ashirbad paints.
                               </p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       
     </div>
     <div className="clearfix"></div>
   </section>
   

   

   


   

    </div>
  )
}

export default Home