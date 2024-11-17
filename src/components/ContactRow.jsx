import React from "react";

// how is the setState hook variable (setSelectedContactId) being passed to this component????
export default function ContactRow({setSelectedContactId, contact}){
console.log("Contact Row..");

    return (
    
       <tr onClick={()=>{setSelectedContactId(contact.id)}}>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
       </tr>
    );

}