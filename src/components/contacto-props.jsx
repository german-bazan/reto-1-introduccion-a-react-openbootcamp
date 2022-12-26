import React from "react";
import PropTypes from 'prop-types';
import ContactoClase from "../models/contacto-clase";

const ContactoComponent = ( { contacto } ) => {
  return (
    <div>
      <h2>
        Nombre: { contacto.nombre }
      </h2>
      <h2>
        Apellido: { contacto.apellido }
      </h2>
      <h2>
        Email: { contacto.email }
      </h2>
      <h2>
        Contacto: { contacto.contacto ? 'Contacto En Linea' : 'Contacto No Disponible' }
      </h2>
    </div>
  );
};

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(ContactoClase)
};

export default ContactoComponent;