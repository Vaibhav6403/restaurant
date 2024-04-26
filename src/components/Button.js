import React from 'react'

const Button = ({ text, padding, margin }) => {
    return (
      <div>
        <button className={`bg-sky-500 rounded-md p-2 m-2 text-lg font-serif transition-transform duration-300 transform hover:scale-110 hover:border-black hover:bg-white`}>
          {text}
        </button>
      </div>
    );
  };    

export default Button
