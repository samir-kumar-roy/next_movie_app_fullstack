import React from 'react';
import contactStyles from '@/app/contact/contact.module.css';
import { AiOutlineMail } from "react-icons/ai";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { MdForum } from 'react-icons/md';

const ContactCard = () => {
    return (
        <div className={contactStyles.contact_grid}>

            <div className={contactStyles.grid_item}>
                <i> <AiOutlineMail /> </i>
                <h2>Email</h2>
                <p>Get back to you within 24 hours</p>
            </div>

            <div className={contactStyles.grid_item}>
                <i> <BsFillChatLeftTextFill /> </i>
                <h2>Live Chat</h2>
                <p>Available 24/7</p>
            </div>

            <div className={contactStyles.grid_item}>
                <i> <MdForum /> </i>
                <h2>Community Forum</h2>
                <p>Ask the community Now</p>
            </div>

        </div>
    )
}

export default ContactCard;