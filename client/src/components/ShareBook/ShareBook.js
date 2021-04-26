import React from 'react';
import MapClickable from '../MapClickable/MapClickable';
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

function ShareBook(props) {
const history = useHistory();

const adress = useRef();
const bookName = useRef();
const bookDescription = useRef();

const submitHandler = async() => {
  const addBookResponse = await fetch('http://localhost:8080/book', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      creator: userName,
      name: bookName.current.value,
      info: bookDescription.current.value,
      adress: adress.current.value,
      latitude: currentLat,
      longitude: currentLng,
    }),
  });
  let book = await addBookResponse.json()
  history.push(`/books/${book._id}`);
}
  const { currentLng, currentLat, userName } = useSelector((state) => state);
  return (
    <div className="center">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-content">
              <h5>Поделись книгой!</h5>
            </div>
            <div className="">
        <div className="input-field col s12">
          <input id="book-adress" type="text" className="validate" ref={adress}/>
          <label htmlFor="book-adress">Адрес книги</label>
        </div>
      </div>
            <div className="">
        <div className="input-field col s12">
          <input id="book-name" type="text" className="validate" ref={bookName}/>
          <label htmlFor="book-name">Название книги</label>
        </div>
      </div>

      <div className="">
        <div className="input-field col s12">
          <input id="book-info" type="text" className="validate" ref={bookDescription}/>
          <label htmlFor="book-info">Описание книги</label>
        </div>
      </div>

     <div className="">
        <div className="input-field col s12">
          <input id="book-info" type="text" className="validate"value={currentLat}/>
          <label for="book-info">Lat</label>
        </div>
      </div>

      <div className="">
        <div className="input-field col s12">
          <input id="book-info" type="text" className="validate" value={currentLng}/>
          <label for="book-info">Lng</label>
        </div>
      </div>
      <div className="">
            <h6>Выбери место на карте</h6>
          </div>
            <div className="">
              <MapClickable/>
            </div>
      <button className="waves-effect waves-light btn orange" onClick = {submitHandler} style={{margin: '1rem'}}>Поделиться</button>
          </div>
        </div>
      </div>
  );
}

export default ShareBook;
