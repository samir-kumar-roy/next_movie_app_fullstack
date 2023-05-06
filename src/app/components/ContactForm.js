'use client';
import styles from '@/app/contact/contact.module.css';
import React from 'react';
import { useState } from 'react';


const ContactForm = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phoone: "",
        message: ""
    });
    const [status,setStatus]=useState('');
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('/api/contact',{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
            });
            if(response.status == 200){
                setUser({
                    username: "",
                    email: "",
                    phoone: "",
                    message: ""
                });
                setStatus("success");
            }else{
                setStatus("error");
            }
        }catch(err){
            console.log(err);
        }
    }
    return (
        <form className={styles.form_item} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor='username'>Your Name</label>
                <input type='text' name='username' id='username' placeholder='Entern Your Name' onChange={handleChange} value={user.username} />
            </div>
            <div className={styles.input_field}>
                <label htmlFor='email'>Your Email</label>
                <input type='email' name='email' id='email' placeholder='Entern Your Email' onChange={handleChange} value={user.email} />
            </div>
            <div className={styles.input_field}>
                <label htmlFor='phone'>Your Phone</label>
                <input type='number' name='phone' id='phone' placeholder='Entern Your Phone Number' onChange={handleChange} value={user.phone} />
            </div>
            <div className={styles.input_field}>
                <label htmlFor='msg'>Your Message</label>
                <textarea rows={5} id='msg' name='message' placeholder='Enter Your Message' onChange={handleChange} value={user.message}></textarea>
            </div>
            <div className={styles.input_field}>
                {status=="success" && <p>Message sent successfully</p>}
                {status=="error" && <p>Message not sent,something wrong</p>}
                <button type='submit'>Send Message</button>
            </div>
            


        </form>
    )
}

export default ContactForm;