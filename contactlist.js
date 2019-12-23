import React, { Fragment } from "react";

import ContactItem from "./contactitem/contactitem";
import "./contactlist.css";
import Search from "../search/search";


const ContactList = ({ ContactList, onStarClick, onDelete }) => {
    // console.log(ContactList);
    const contactItem = ContactList.map((item) => {
        return <ContactItem key={item.id} btnStar={item.btnStar} name={item.name} decription={item.decription} avatar={item.avatar}
            gender={item.gender} facebook={item.facebook} instagram={item.instagram} twitter={item.twitter} onStarClick={() => onStarClick(item.id)} onDelete={() => onDelete(item.id)} />

    }
    )
    // console.log(contactItem);
    return (
        <Fragment>
            <Search></Search>
            {contactItem}
        </Fragment>
    );
}

export default ContactList;