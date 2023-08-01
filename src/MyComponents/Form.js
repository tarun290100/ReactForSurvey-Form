import React, { useState } from 'react';


export const Form = ({addResponse})=>{


//useState is used to update the input fields for survey

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState("");
  const [que1, setQue1] = useState("");
  const [que2,setQue2] = useState("");
  const [que3, setQue3] = useState("");



  //Here is submit function to save all details of survey
  //submit function call  to save user details

  const submit=(e)=>{
    e.preventDefault();
    if(!city||!name||!role||!que1||!que2||!que3){
      alert("fields cannot be blank")
    }
    else{
      addResponse(name,city,role,que1,que2,que3)
      setName("")
      setCity("")
      setRole("")
      setQue1("")
      setQue2("")
      setQue3("")
    }
 
  }
  
  
    return(

    //Here is Survey form to fill for employee
    //onsubmit submit function will call


   <div className='container my-3'>
    <h3 className='my-3'>Fill Survey-Form</h3>
    <form onSubmit={submit}>
  <div className="mb-1">
    <label htmlFor="name" style={{margin: "3px",fontWeight: '500',fontSize:"18px"}} className="form-label">1. Name</label>
    <input type="text" style={{width:"62%", padding:"1px 8px",fontSize:"18px", background:"rgb(235 220 220)"}} value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control" id="name" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-1">
    <label htmlFor="city" style={{margin: "3px",fontWeight: '500',fontSize:"18px"}} className="form-label">2. City</label>
    <input type="text"  style={{width:"62%", padding:"1px 8px",fontSize:"18px",  background:"rgb(235 220 220)"}} value={city} onChange={(e)=>{setCity(e.target.value)}} className="form-control" id="city"/>
  </div>
  <div className="mb-1">
    <label htmlFor="role" style={{margin: "3px",fontWeight: '500',fontSize:"18px"}} className="form-label">3. Role</label>
    <input type="text"  style={{width:"62%", padding:"1px 8px",fontSize:"18px", background:"rgb(235 220 220)"}} value={role} onChange={(e)=>{setRole(e.target.value)}} className="form-control" id="role" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-1">
    <label htmlFor="que1" style={{margin: "3px",fontWeight: '500',fontSize:"18px"}} className="form-label">4. Do you think people from all backgrounds are treated fairly at our company?</label>
    <div style={{margin:"0px 3px"}}>(YES / NO)</div>
    <input type="text" style={{width:"62%", padding:"1px 8px",fontSize:"18px" , background:"rgb(235 220 220)"}} value={que1} onChange={(e)=>{setQue1(e.target.value)}} className="form-control" id="que1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-1">
    <label htmlFor="que2" style={{margin: "3px",fontWeight: '500',fontSize:"18px"}} className="form-label">5. Do you agree working here, you feel that you can live a physically healthy lifestyle?</label>
    <div style={{margin:"0px 3px"}}>(YES / NO)</div>
    <input type="text" style={{width:"62%", padding:"1px 8px",fontSize:"18px" , background:"rgb(235 220 220)"}} value={que2} onChange={(e)=>{setQue2(e.target.value)}} className="form-control" id="que2" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-1">
    <label htmlFor="que3" style={{margin: "3px",fontWeight: '500',fontSize:"18px"}} className="form-label">6. Do you think your co-workers are supportive of you when you are having a bad day at work?</label>
    <div style={{margin:"0px 3px"}}>(YES / NO)</div>
    <input type="text"  style={{width:"62%", padding:"1px 8px",fontSize:"18px" ,  background:"rgb(235 220 220)"}} value={que3} onChange={(e)=>{setQue3(e.target.value)}} className="form-control" id="que3" aria-describedby="emailHelp"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success my-4">Submit</button>
</form>
   </div>
    )
}