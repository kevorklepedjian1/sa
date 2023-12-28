import React from 'react';

function Message({ text }) {
  return (
    <div className="w-32 p-2 small text rounded-md rounded-bl-none">
      {text}
    </div>
  );
}

export default Message;
