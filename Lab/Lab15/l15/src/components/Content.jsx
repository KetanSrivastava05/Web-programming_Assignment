import React, { useState } from 'react';

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you call fake spaghetti? An impasta!"
];

function Content() {
  const [joke, setJoke] = useState("");

  const getRandomJoke = () => {
    const index = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[index]);
  };

  return (
    <div>
      <button onClick={getRandomJoke}>Get Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default Content;
