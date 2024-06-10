import React from "react";
import ContactForm from "./ContactForm";

function ContactSection(){
  return(
    <div className="bg-dark text-light py-5" id='contact'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column jusify-content-center">
            <h2 className="mb-5">Контакты</h2>
            <p>anastasiiaryzhowa@gmail.com</p>
            <p>Moskow, 2024</p>
            <hr className="w-50 mx-auto"/>
            <ul className="list-unstyled d-flex justify-content-center">
              <li></li>

            </ul>
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <ContactForm/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ContactSection;