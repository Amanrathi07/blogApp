import React, { useState } from 'react'

function Login() {

    const[userInfo,setUserInfo]=useState({email:"",password:""})

    async function matchUser(){
        const data =await fetch("")
    }

    function submited(e){
        e.preventDefault();
        e.stopPropagation();
        
        //match data in db
        
    }

    return (
        <div>
            <form action="">
                name <input type="text" value={userInfo.email} placeholder='user name' onInput={(e)=>{setUserInfo({...userInfo,email:e.target.value})}}/>
                password <input type="text" value={userInfo.password} placeholder='user name' onInput={(e)=>{setUserInfo({...userInfo,password:e.target.value})}}/>

                <button onClick={(e)=>{submited(e)}}>clickme</button>
            </form>
            
        </div>
    )
}

export default Login