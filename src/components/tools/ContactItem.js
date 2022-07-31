import React from 'react'
import * as BsIcons from 'react-icons/bs'
import '../../styles/Contact.css'

const ContactItem = ({contact}) => {

  return (
    <>
        {contact.icon ?
            <div className='contactItem'>
                <span className='contactIcon '><BsIcons.BsTelephone className='contactIconBs' /></span>
                <span className='contactcontent'>{contact.information}</span>
            </div>
        :
            <div className='contactItem'>
                <span className='contactIcon '><BsIcons.BsTelephone className='contactIconBs' /></span>
                <span className='contactcontent'>{contact.information}</span>
            </div>
        }
    </>
  )
}

export default ContactItem