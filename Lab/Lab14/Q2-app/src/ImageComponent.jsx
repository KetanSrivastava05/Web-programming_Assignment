import React from 'react';
import srcImage from './Images/src-image.jpeg';  

function ImageComponent() {
  return (
    <div>
      <h2>Images in React</h2>
      
     
      <h3>Image from public folder:</h3>
      <img src="/Images/public-image.jpeg" alt="Public Folder" width="300" />

  
      <h3>Image from src folder:</h3>
      <img src={srcImage} alt="Src Folder" width="300" />
    </div>
  );
}

export default ImageComponent;
