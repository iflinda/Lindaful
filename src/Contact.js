import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';
import './Contact.css';
import './Global.css';
import ContactBox from './images/ContactBox.svg';
import{ init } from 'emailjs-com';
import Modal from 'react-modal';

function Contact() {
    init("user_0B74LlD8tiveSma5rjm9e");
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
      });
    
    const onSubmit = (e) => {
        e.preventDefault();
        send(
        "lindaful",
        "template_s1ndmxl",
        toSend,
        "user_0B74LlD8tiveSma5rjm9e"
    )
      .then((response) => {
        document.getElementById('name').value='';
        document.getElementById('email').value='';
        document.getElementById('message').value='';
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    };
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const customStyles = {
        button: { 'font-family': "'Pacifico', cursive",

        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          'text-align': 'center',
        },
    };

    const submit = document.getElementById("submit");

    Modal.setAppElement(submit);

    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
      
    return (
        <div id="contact">
            <h1>let's talk</h1>
            <img className="contactbox" src={ContactBox} alt=""/>
            <div id="form">
                <form id="contactForm" onSubmit={onSubmit}>
                    <p>Name</p>
                    <input
                        id="name"
                        type='text'
                        name='from_name'
                        placeholder='Your name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    /> <br />
                    <p>Email</p>
                    <input
                        id="email"
                        type='text'
                        name='reply_to'
                        placeholder='your@email.com'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                    <p>Message</p>
                    <textarea
                        id="message"
                        type='text'
                        name='message'
                        placeholder='Type your message here.'
                        value={toSend.message}
                        onChange={handleChange}
                    /><br />
                    <button id="submit" onClick={openModal} type='submit'>submit</button>
                </form>
            </div>
            <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Confirmation"
            >
                <div><h2>Thank you for emailing!</h2></div>
                <button onClick={closeModal}>You're welcome.</button>
            </Modal>
            </div>
        </div>
    );
}

export default Contact;