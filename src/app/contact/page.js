import React from 'react'
import contactStyles from '@/app/contact/contact.module.css';
import ContactCard from '@/app/components/ContactCard';
import ContactForm from '@/app/components/ContactForm';


function Page() {
    return (
        <div className={contactStyles.container}>
            <ContactCard />
            <h2 style={{ textAlign: "center", marginTop: "3rem", marginBottom: "2rem" }}><span style={{ color: "red" }}>We Would Love To</span> Hear From You.</h2>
            <ContactForm />

        </div>
    )
}

export default Page;