import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef();

  const handleClick = () => inputRef.current.focus();

  return (
    <div>
      <input ref={inputRef} placeholder="Focus me!" />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}

export default InputFocus;
