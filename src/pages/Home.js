import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Home() {

  /// API CALL STARTS HERE
  const [post, setPost] = useState(null); /// Initialize the state

  useEffect(() => {
    axios.get(global.url+'api/welcome').then(response => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return(
    
    <div>

<section class="slider-banner">
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-inner">
	 	   
  {
     post[1].data.map((banner_image, index) => (
   
       <div key={`uui-${index}`} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
        <img src={global.url+'uploads/banner/'+banner_image.image_title} className="d-block w-100" alt="" />
       </div>

     ))
  }
		  	
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section>

        {/* Welcome Starts From Here */}
<section class="welcome">
		  <div class="container">
		  <div class="row d-flex justify-content-between align-items-center">
			  <div class="col-lg-5 col-md-6">
				  
			  <div class="welcome-img">
				  <img src={global.url+'uploads/homepage/'+post[0][0].image_title} alt=""/>
				  </div>
				  
			  </div>
			  <div class="col-lg-7 col-md-6">
				  <div class="welcome-txt">
					  <h1>{ post[0].title }</h1>

            <div dangerouslySetInnerHTML={{__html:post[0][0].content}} ></div>

					  <Link to="/about" class="btn btn-outline-primary" role="button">
              <i class="fas fa-align-justify"></i> Read More
            </Link>
				  </div>
			  </div>
		  </div>
		  </div>
	  </section>

    {/* Welcome Ends From Here */}


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
               <div dangerouslySetInnerHTML={{__html:post[0][1].content}} ></div>
             </div>
           </div>
           <div className="col-lg-7 col-md-6">
           <div className="features-img">
           <img src={global.url+"uploads/homepage/"+post[0][1].image_title} alt='' />
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
           <img src={global.url+"uploads/homepage/"+post[0][2].image_title} alt='' />
             </div>
           </div>
           <div className="col-lg-7 col-md-6">
             <div className="products-home-txt">
               <h1>Explore<br/>
               Our Products</h1>
               <div dangerouslySetInnerHTML={{__html:post[0][2].content}} ></div>
               <Link to="ff" className="btn btn-outline-primary" role="button" ><i className="fas fa-search"></i> Explore More</Link>
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
                <div dangerouslySetInnerHTML={{__html:post[0][4].content}} ></div>
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