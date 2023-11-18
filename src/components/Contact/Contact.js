import React from 'react';
import restaurantData from '../../restaurantData';

const Contact = () => {
  return (
    <section id="contact">
     <h3>Contact Information</h3>
                <p>Address: {restaurantData.contactInfo.address}</p>
                <p>Phone: {restaurantData.contactInfo.phone}</p>
                <p>Email: {restaurantData.contactInfo.email}</p>
    </section>
  );
}

export default Contact;
