import React, { useState } from 'react';

const Form =()=>{

    const[forum,setForum]=useState({
        first_name:"",
        last_name:"",
        age:"",
        email:""
    });

    const onClick=(e)=>{
        const{name,value}=e.target;
        setForum({...forum ,[name] : value});
      console.log(e);
      console.log(forum);
    }

    return(
        <div>
            <form>
                <label>First Name :</label>
                <input type="text" placeholder="Enter your first name ..."
                onChange={onClick}
                name="first_name"
                >

                </input>
            </form>

        </div>
    )

}

export default Form;