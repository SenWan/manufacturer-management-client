import React from 'react';
import { Button } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div  className="contactus mt-5 section-gap">
			    <div className="container">
			        <div className="row d-flex justify-content-center">
						<div className="menu-content pb-60 col-lg-8">
							<div class="title text-center">
								<h1 className="mb-10">You Can Contact Us</h1>
							</div>
						</div>
					</div>
			    </div>
				<div className="section contact-us">
			         <div className="container">
			            <div className="outer-box">
			               <div className="company-data">
			                  <ul className="row">
			                     <li className="col-lg-4 col-sm-6">
			                        <div className="box">
			                           <span className="lnr lnr-location"></span>
			                           8544 County<br/>
			                           St. Yorkshire, NY 55337
			                        </div>
			                     </li>
			                     <li className="col-lg-4 col-sm-6">
			                        <div className="box">
			                           <span clasName="lnr lnr-phone"></span>
			                           +1-234-567-8910<br/>+1-234-567-8910
			                        </div>
			                     </li>
			                     <li className="col-lg-4 col-sm-12">
			                        <div className="box">
			                           <span className="lnr lnr-bubble"></span>
			                           <p>senwan@gmail.com<br/>
			                           rocls@yahoo.com</p>
			                        </div>
			                     </li>
			                  </ul>
			               </div>
			               <div className="form-box clearfix">
			                  <form id="contactform" data-toggle="validator" className="shake scroll-reveal">
			                  	<div className="row">
			                     <div className="form-group col-sm-6">
			                        <input type="text" className="form-control" id="name" placeholder="Your name" required data-error="Name missing"/>
			                        <div className="help-block with-errors"></div>
			                     </div>
			                     <div className="form-group col-sm-6">
			                        <input type="email" className="form-control" id="email" placeholder="Your email" required/>
			                        <div className="help-block with-errors"></div>
			                     </div>
			                	</div>
			                	<div className="row">
			                     <div className="form-group col-sm-12">
			                        <textarea id="message" className="form-control" rows="6" placeholder="Write your message here" required></textarea>
			                        <div className="help-block with-errors"></div>
			                     </div>
			                     <div className="col-sm-12 mt-1">
			                        <Button className='btn btn-primary'>Send Message</Button>
			                        <div id="msgSubmit"></div>
			                     </div>
			                    </div>
			                  </form>
			               </div>
			            </div>
			         </div>
			      </div>
			</div>
    );
};

export default Contact;