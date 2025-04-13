import React from 'react';

function ReverseString({ text }) {
  const reversed = text.split("").reverse().join("");
  const isPalindrome = text.toLowerCase() === reversed.toLowerCase();

  return (
    <div>
      <p>Reversed: {reversed}</p>
      <p>{isPalindrome ? "It is a palindrome" : "It is not a palindrome"}</p>
    </div>
  );
}

export default ReverseString;
