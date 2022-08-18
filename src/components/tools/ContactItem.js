import React from 'react'
import * as BsIcons from 'react-icons/bs'
import { Parser, ProcessNodeDefinitions } from "html-to-react";
import '../../styles/Contact.css'

// Boilerplate stuff
const htmlParser = new Parser(React);
const processNodeDefinitions = new ProcessNodeDefinitions(React);
function isValidNode() {
  return true;
}
  
// Custom instructions for processing nodes
const processingInstructions = [
  // Create instruction for custom elements
  {
    shouldProcessNode: (node) => {
      // Process the node if it matches a custom element
      return (node.name && customElements[node.name]);
    },
    processNode: (node) => {
      let CustomElement = customElements[node.name];
      return <CustomElement />;
    }
  },
  // Default processing
  {
    shouldProcessNode: () => true,
    processNode: processNodeDefinitions.processDefaultNode
  }
];



const ContactItem = ({contact}) => {
    console.log(contact," le contact recu")
    function Icon  (){
        let htmlString = contact.icon
        return(
            htmlParser.parseWithInstructions(htmlString, isValidNode, processingInstructions)
        )
    }
    console.log(Icon, "icon")
  return (
    <>
        {contact.icon ?
            // <div className='contactItem'>
            //     <span className='contactIcon '><Icon className='contactIconBs' /></span>
            //     <span className='contactcontent'>{contact.information}</span>
            // </div>
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