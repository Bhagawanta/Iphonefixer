import React, { useState } from 'react'
import emailjs from 'emailjs-com';
export const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name === null || name === ""){
          alert("Please provide name");
        }
        else if(email === null || email === ""){
          alert("Please provide email");
        }
        else if(message === null || message === ""){
          alert("Please provide message");
        }
        else if(subject === null || subject === ""){
          alert("Please provide subject");
        }
        else {
        alert("Hello");
        emailjs.sendForm('service_zdrgl8y', 'template_vf7dgma', e.target, 'user_489Ax7gnUxmxSol8Edmje')
        .then((result) => {
           alert("Email Send Successfully.......");
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        }
    }
    return (
        <React.Fragment>
             {/* <!-- breadcrumb start--> */}
    <section className="breadcrumb breadcrumb_bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb_iner text-center">
                        <div className="breadcrumb_iner_item">
                            <h2>contact us</h2>
                            <h5>home <span></span> contact</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- breadcrumb start--> */}
    {/* <!-- ================ contact section start ================= --> */}
  <section className="contact-section section_padding">
    <div className="container">
      <div className="d-none d-sm-block mb-5 pb-4">
        <div id="map" style={{height:"480px"}}>
         <iframe  title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d281.40284696159245!2d73.74818861266154!3d18.553901035109238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3769a7f95f%3A0x8b3844cc4d36c068!2sIPhone%20Fixer%20(The%20iPhone%20Technician)!5e0!3m2!1sen!2sin!4v1623384356324!5m2!1sen!2sin" width="1200" height="480" style={{border:0}} allowfullscreen="" loading="lazy"></iframe> 
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="contact-title">Get in Touch</h2>
        </div>
        <div className="col-lg-8">
          <form className="form-contact contact_form" onSubmit={handleSubmit} >
            <div className="row">
              <div className="col-12">
                <div className="form-group">

                  <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9"
                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'"
                    placeholder='Enter Message'
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    ></textarea>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control" name="name" id="name" type="text" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter your name'" placeholder='Enter your name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control" name="email" id="email" type="email" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter email address'" placeholder='Enter email address'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input className="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Subject'" placeholder='Enter Subject'
                    value={subject}
                    onChange={(e)=>setSubject(e.target.value)}
                    />
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="button button-contactForm btn_1">Send Message <i className="flaticon-right-arrow"></i> </button>
            </div>
          </form>
        </div>
        <div className="col-lg-4">
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-home"></i></span>
            <div className="media-body">
              <h3>ठकसेन नगर, Sus, Pune,</h3>
              <p> Maharashtra 411021</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
            <div className="media-body">
              <h3>(+91) 90758 21821</h3>
              <p>Mon to Sun 9am to 10pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-email"></i></span>
            <div className="media-body">
              <h3>Amollondhe@gmail.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- ================ contact section end ================= --> */}

        </React.Fragment>
    )
}

