import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
const Login=()=>{
       var select;
       var user;
       var password;
function result(){
     if(select=="IDEA"){
                if(user=="idea@gmail.com" & password=="IDEA@123"){
                        window.location.href="https://react-bootstrap.github.io/components/forms/";
                }
     }
     else if(select=="BSNL"){

     }
     else if(select=="AIRTEL"){

}
else{
        alert("Select the agency")
}
}

function userid(event){
       user=event.target.value;
         }
function pass(event){
         password=event.target.value;

         }
function inputEvent(event){
         select=event.target.value;
         }

      return(
              <>

<br/>



<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Select aria-label="Floating label select example" onChange={inputEvent}>
    <option>Open this select menu</option>
    <option >IDEA</option>
    <option >BSNL</option>
    <option >AIRTEL</option>
  </Form.Select>



    <Form.Label>User Id</Form.Label>
    <Form.Control type="text" onChange={userid} placeholder="Enter User-Id" />
    <Form.Text className="text-muted">
   
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" onChange={pass} placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
 
</Form>

<Button variant="primary" type="submit" onClick={result}>
    Submit
  </Button>

              </>
      );
};
export default Login;