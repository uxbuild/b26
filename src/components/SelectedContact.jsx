import React from "react";
import { useState } from "react";
import { useEffect } from "react";

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

return (<>
<div>{contact ? contact.name: "nope!"}</div>
<div>{contact ? contact.company.catchPhrase: "nope!"}</div>


</>);

// return (<div>hello</div>)
}

