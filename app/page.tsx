"use client"

import Image from 'next/image'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react';
function InputSample() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };
  const value = "/video.jpeg"

  return (
    <div>
      <input className="form-control" placeholder='http://192.168.0.12:8080' onChange={onChange} value={text}  />
      <button className="form-control" onClick={onReset}>초기화</button>
      <img src={text+value}></img>
      <div>
        <b>URL: {text}</b>
      </div>
    </div>
  );
}


function App() {
  return (
    <InputSample />
  );
}
export default App;