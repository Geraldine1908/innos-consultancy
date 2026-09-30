import React from 'react';
function Contact() {
    return(
        <>
            <h2 className="contact">Contact Us</h2>
            <section id="contact" className="contact-section">
                <div className="contact-left">
                    <div className="cart">
<h3 className="card">Visit Our Offices</h3>
                    <p> No 8, Ogiefa Street Off Mission Road <br />
                     Benin City, Edo State, Nigeria</p>
                    </div>
                    
                <div className="cart">
 <h3 className="card">Phone / Whatsapp</h3>
                <p>+905338864118</p>
                </div>
               
<div className="cart">
<h3 className="card">Email</h3>
                <p> innosconsultancy@gamil.com</p>
</div>
                
<div className="cart">
 <h3 className="card">Instagram</h3>
                <p> @innosconsultancy</p>
</div>




                </div>
                <div className="contact-right">
                    <h3 className="card">Send Us a Message</h3>
                    <form  action ="https://formspree.io/f/xgaeoyqk" method ="POST"className="contact-form">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email"  name="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </section>
        </>
    );
}
export default Contact;