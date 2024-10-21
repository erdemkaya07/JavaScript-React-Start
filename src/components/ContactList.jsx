import React from 'react'
import Contact from './Contact'

function ContactList() {
  return (
    <div className='contact-list'>
   {/*    <div className="contact">
        <p className="names">Erdem</p>
        <p className="email">erdem@erdem.com</p>
      </div>
      <div className="contact">
        <p className="names">Joakim</p>
        <p className="email">Joakim@erdem.com</p>
      </div>
      <div className="contact">
        <p className="names">Therese Lidbom</p>
        <p className="email">Therese@erdem.com</p>
      </div> */}
      <Contact name="Erdem Kaya" email="erdem@domain.com" />
      <Contact name="Erdem Kaya" email="erdem@domain.com" />
      <Contact name="Erdem Kaya" email="erdem@domain.com" />
      <Contact name="Erdem Kaya" email="erdem@domain.com" />
    </div>
  )
}

export default ContactList