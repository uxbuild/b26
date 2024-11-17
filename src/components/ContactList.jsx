//component function
import React from "react";
import { useState } from "react";
import ContactRow from "./ContactRow";
import { useEffect } from "react";

export default function ContactList({setSelectedContactId}) {
  // dummy data
  const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

  // contact state hook with variable useState..
  const [contacts, setContacts] = useState(dummyContacts);

// call useEffect hook
useEffect(()=>{
    async function fetchContacts(){
        try {
            // get data
            const url = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";
            const response = await fetch(url);
            const result = await response.json();
            setContacts(result);
            // console.log("async result:", result);
            
        }catch(error){
            console.log(error);
            
        }
    }
    fetchContacts();
},[])

//   console.log("wassup data.. contacts:", contacts);

  return ( 
    <>
      <h1>Contact List</h1>
      <table className="table contact-list">
        {/* <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead> */}
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            // Map over data here
            contacts.map((contact) => {
                // return <ContactRow key={contact.id} contact={contact} />;
              return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />
            })
          }
        </tbody>
      </table>
    </>
    
  );
}

// export default ContactList;
