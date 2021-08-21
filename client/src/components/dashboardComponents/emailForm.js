import React, { Fragment, useState } from "react";
import axios from "axios";
const EmailForm = () => {

    const [estado, setEstado] = useState(false)
    const [inputs, setInputs] = useState({
      email: "",
      subject: "",
      message: "",
    });
  
    const { email, subject, message } = inputs;
  
    const onChange = e =>
      setInputs({ ...inputs, [e.target.name]: e.target.value });
  
    const onSubmitForm = async e => {

      // reallyyy handy video to understand fetch API https://www.youtube.com/watch?v=Kw5tC5nQMRY

      e.preventDefault();

      
      try {

      const test = { email, subject, message };

      //fetch request is a POST request as you're posting data to the server
      //option is the content and construct of the request
      
      console.log(test)
      //the URL is the address i want to post the content (options) too, fetch request can promise to return something this case the response!
     
      axios({
        method: "POST",
        url: "http://192.168.1.133:8000/dashboard/",
        data: test,
        headers: {"Content-type": "application/json", jwt_token: localStorage.token },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
        
    
     //if the post is unsuccessful the console log an error 
    } catch (err) {
        console.error(err.message);
      }
    }; 

  
    return (
      <Fragment>
      <div>
        {
          (estado) &&
          <div className="alert alert-primary" role="alert">
            This is a primary alert—check it out!
          </div>
        
          
        }
        
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            name="email"
            placeholder="email" 
            value={email}
            onChange={e => onChange(e)}
            className="form-control my-3"
            />
          <input
            type="text"
            name="subject"
            placeholder="subject"
            value={subject}
            onChange={e => onChange(e)}
            className="form-control my-3"
            />
          <input
          type="textarea"
          name="message"
          placeholder="message" 
          rows="10"
          cols="50"
          value={message} 
          onChange={e => onChange(e)}
          className="form-control my-3"
          />

          <button className="btn btn-success btn-block">Submit</button>
        </form>
      </div>
      </Fragment>
    );
  };


export default EmailForm;