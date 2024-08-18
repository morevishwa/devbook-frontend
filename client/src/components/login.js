
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let dispatch=useDispatch();
  let email=useRef();
  let password=useRef();
  const navigate=useNavigate();



  let user_login=async function(){
     let data={email:email.current.value,
               password:password.current.value}
      try{
        let res=await axios.post('http://localhost:5000/user/login',data);
        res=res.data;
        delete data.password;
        data.name=res.data.name;
        data.token=res.data.token;
        data.id=res.data.id;
        dispatch({type:'LOGIN',payload:data});
        navigate('/chat');
      }catch(error){
        alert("try again");
        navigate('/login');
      }
  }

  
  return (
    <div className='loginbox'>
          <br></br>
          <div>.Login</div>
          <br></br>
          <input className='input ' ref={email} id='email' placeholder='email'></input>
          <input className='input ' ref={password} id='password' placeholder='password'></input>
          <br></br>
          <button className='button' onClick={user_login}>submit</button>
          <br></br>

    </div>
  )
}
