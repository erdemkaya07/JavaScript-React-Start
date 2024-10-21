import React from 'react'

/* function Contact(props) {

  return (
    <div className="contact">
        <p className="names">{props.name}</p>
        <p className="email">{props.email}</p>
      </div>
  )
} */
function Contact({name, email}) {

  return (
    <div className="contact">
        <p className="names">{name}</p>
        <p className="email">{email}</p>
      </div>
  )
}

export default Contact