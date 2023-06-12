import React, { useEffect, useState } from 'react';

const Form =()=>{

   const [form,setForm] =useState({
    name:"",
    email:"",
    password:"",
    gender:"",
    city:""
   })

   const handleClick=(e)=>{
    console.log(e);
    console.log(form);
    const{name,value}=e.target;
    setForm({...form,[name]:value});
   }
//    useEffect(
//     console.log(form)
//    ,[form]);

   const formSubmit=(e)=>{
     e.preventDefault();
   }


   return (
    <div>
        <h1>Sign up</h1> 
        <form type="submit">
            <div>
                <label > Enter your name</label>
                <input name="name" type="text" onChange={handleClick} ></input>
            </div>
            

            <input type="submit" onClick={formSubmit} ></input>
        </form>
    </div>
   )

}

export default Form;