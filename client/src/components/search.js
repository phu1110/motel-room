import React, { memo } from 'react';

const Search = ({ link, text, Icons }) => {
  return (
    <button
      onClick={link}
      className="flex p-1 items-center rounded block transition duration-300 hover:text-pink-500 hover:bg-gray-100 cursor-pointer"
    >
      <span>{Icons && <Icons />}</span>
      <p className="ml-2">{text}</p>
    </button>
  );
};

export default memo(Search);
