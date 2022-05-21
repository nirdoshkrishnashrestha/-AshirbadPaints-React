import React from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';
import {useState, useEffect} from 'react';

const About=()=> {

    const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(global.url+'api/getapi').then(response => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  console.log(post);

  return (
    <div>

    <section class="content-page-wrapper">
	<div class="heading-blocks">
		<div class="virtual-paints">
		<div class="container">
			<h1>Who We Are ?</h1>			
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><Link to="/"><i class="fas fa-home" aria-hidden="true"></i></Link></li>
					<li class="breadcrumb-item active" aria-current="page">Who We Are ?</li>
				</ol>
			</nav>
		</div>
		</div>
	</div>
	<div class="container">
  <div class="content-page">
	  <div class="about">
	  <div class="row">
		  <div class="col-lg-6">
				<center>
				<div class="about-logo">
					<img src="images/ashirbad-paints-logo.png" alt=""/></div>
				</center>
				<h2>{ post.title }</h2>
			  <h3>Ashirbad rapidly grew in popularity and scope, eventually becoming the most well-known paint brand in the country. After barely ten years of operation, it has become a household name.</h3>
	    </div>
		  <div class="col-lg-6">
		<div dangerouslySetInnerHTML={{__html:post.content}} ></div>
		  
		  </div>
		  asa
		  <div class="col-lg-12 mt-4">			  
	      <div class="map">
			  <img src={global.url+"uploads/homepage/"+post.image_title} alt={ global.url }/></div>
		  </div>
	  </div>
	  </div>
					
    </div>
	</div>	
</section>
    </div>
  )
}

export default About