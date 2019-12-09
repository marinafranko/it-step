import React from "react";

import ContactItem from "./contactitem/contactitem";
import "./contactlist.css";


const ContactList = ({ ContactList }) => {
    // console.log(ContactList);
    const contactItem = ContactList.map((item) => {
        return <ContactItem key={item.id} name={item.name} decription={item.decription} avatar={item.avatar} gender={item.gender} facebook={item.facebook} instagram={item.instagram} twitter={item.twitter} />
    }
    )
    // console.log(contactItem);
    return (
        <div>
            {contactItem}
        </div>
    );
}

export default ContactList;