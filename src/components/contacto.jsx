import React from "react";
import ContactoComponent from "./contacto-props";
import { ContactoClase } from "../models/contacto-clase";

const Contacto = () => {

  const contactoDefault = new ContactoClase('German',  'Bazan', 'germanalebazan@gmail.com', false);
    
  return (
    <div>
      <div>
        <h1>Contacto</h1>
      </div>    
      <ContactoComponent contacto={ contactoDefault }></ContactoComponent>
    </div>
  )
}

export default Contacto;