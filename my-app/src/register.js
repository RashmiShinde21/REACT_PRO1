import React, { useState } from 'react';

import { Form, Button } from 'react-bootstrap';

export default function Register() {
 const [user,setUser]=useState({
  email:"",password:""
 });
 let value,name;
 const handleInputs=(e)=>{
  console.log(e);
  name=e.target.name;
  value=e.target.value;
  setUser({...user,[name]:value});
 }
 const PostData=async(e)=>{
  e.preventDefault();
  const {email,password}=user;
  const res=await fetch("/register",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      email:email,password:password
    })
  })
     const data=await res.json();
     if(data.status===422||!data)
     {
      window.alert("invalid registeration");
      console.log("invalid registeration");
     }
     else
     {
      window.alert("reg succesful");
      console.log("reg succesfull");
      
     }
 }

  return (
    <div>
      <h2>Register</h2>
      <Form  method="POST">
       
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputs}
            placeholder="Enter email"
          />
        </Form.Group>

       
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputs}
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={PostData}>
          Register
        </Button>
      </Form>

      
    </div>
  );
}
