import React, { Fragment, useState } from "react";
// import axios from "axios";

const ContactForm = () =>  {

  const [inputs, setInputs] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const { email, subject, message } = inputs;

  const onChange = (e) => {
    setInputs({ 
      email: e.target.email, 
      subject: e.target.subject, 
      message: e.target.message });
  };

    const onSubmitForm = async (e) => {
      e.preventDefault();

      console.log(inputs, 'SUBMITTED')

      /*try {
        const body = { email, subject, message };
        const response = await fetch(
          "http://localhost:5000/dashboard/",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json", jwt_token: localStorage.token 
            },
            body: JSON.stringify(body)
          }
        );
        const parseRes = await response.json();

        console.log(parseRes);

      } catch (err) {
        console.error(err.message);
      }*/

      
  
       /* axios({
          method: "POST", 
          url:"http://localhost:5000/dashboard/", 
          headers: { jwt_token: localStorage.token },
          data: {email, message, subject }
        }).then((response)=>{
          if (response.data.status === 'success'){
              alert("Message Sent."); 
          }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
          }
        })*/
    
  }

  return (
  
    <div>
            <Fragment>
            <form class = "contact-form" onSubmit={onSubmitForm}>
            <input type="email" id="email" value={email} placeholder="from" onChange={e => onChange(e)} /><br/>
            <input type='subject' id="subject" value={subject} placeholder="subject" onChange={e => onChange(e)}/><br/>
            <textarea id="message" placeholder="message" value={message} cols="30" rows="10" onChange={e => onChange(e)}></textarea><br/>
            <input type='submit' class="submit" value="Send Message"/><br/>
            </form>
            </Fragment>
    </div>
  );

}

export default ContactForm;