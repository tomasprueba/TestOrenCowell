import React from "react";
import { Link } from "react-router-dom";



const Landing = () => {

return (
    <div>
        <h1>SALESPORT</h1><br />
        <h2>Go to...</h2><br />
        <Link to="/login">
        <button type="button">login!</button>
        </Link><br />    
        <h2>Go to...</h2><br />
        <Link to="/register">
        <button type="button">register!</button>
        </Link><br /> 
    </div>
  );
};

export default Landing;