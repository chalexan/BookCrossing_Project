import React from 'react';
import { useRef } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Registration(props) {
const history = useHistory();
const dispatch = useDispatch();
const regHandler = async () => {
  
const uname = name.current.value;
const upass = pass.current.value; 

const response = await fetch('http://localhost:8080/users/register', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login: uname,
        password: upass,
      }),
    });
if (response.status === 500) return
dispatch({type: 'LOGIN', payload: uname});
history.push('/');
}

const name = useRef();
const pass = useRef();

  return (
    <div className="row">
    <form className="col s12 center">
    <h4>Регистрация</h4>
      <div className="row">
        <div className="input-field col s12">
          <input ref={name} id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">Имя</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input ref={pass} id="password" type="password" className="validate"/>
          <label htmlFor="password">Пароль</label>
        </div>
      </div>
     
      <a onClick={regHandler} className="waves-effect waves-light btn orange">Войти</a>
    </form>
  </div>
  );
}

export default Registration;
