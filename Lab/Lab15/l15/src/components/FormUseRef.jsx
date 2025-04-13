import React, { useRef, useState } from 'react';

function FormUseRef() {
  const nameRef = useRef();
  const emailRef = useRef();
  const [data, setData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setData(`Name: ${nameRef.current.value}, Email: ${emailRef.current.value}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} placeholder="Name" />
        <input ref={emailRef} placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
      <p>{data}</p>
    </>
  );
}

export default FormUseRef;
