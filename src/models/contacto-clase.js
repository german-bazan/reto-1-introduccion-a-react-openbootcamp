export class ContactoClase {
    nombre = '';
    apellido = '';
    email = '';
    contacto = false;
  
  constructor(nombre, apellido, email, contacto) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.contacto = contacto
  };
};

export default ContactoClase;