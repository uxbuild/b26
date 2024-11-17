import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function SelectedContact({selectedContactId, setSelectedContactId}){

const [contact, setContact] = useState(null); // null???
console.log("SelectedContact > selectedContactId", selectedContactId);

// useEffect hook.
useEffect(()=>{
    // fetch data..
    async function fetchContact(){
        try {
            // get data
            const url = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`;
            const response = await fetch(url);
            const result = await response.json();
            
            // update contact
            setContact(result);
            
            console.log("async SelectedContact url:", url);
            console.log("async SelectedContact result:", result);
            console.log("async SelectedContact contact:", contact);
             
        }catch(error){
            console.log(error);
        }
    }
    fetchContact();
}, [])

function clearSelected(){
    setSelectedContactId && setSelectedContactId(null);
}
return ( contact && 
<>
<h1>Contact</h1>
<div className="card">
    {/* card  */}
  <div className="card-body">
    <h5 className="card-title contact-name">{contact.name}</h5>
    <p className="card-text">Email: {contact.email}</p>
    <p className="card-text">Phone: {contact.phone}</p>
    <p className="card-text">Company: {contact.company.name}</p>
    <p className="card-text">Address: {contact.address.street}, {contact.address.city} {contact.address.zipcode} </p>
    <p className="card-text">Web address: {contact.website}</p>
    
  </div>
  <a href="#" className="btn btn-primary" onClick={clearSelected}>
      View Contact List
    </a>
</div>
</>
);
}
