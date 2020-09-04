import React from 'react';

const SmallCard = ({ title, text, btnText, btnTo }) => {
  return (
    <div
      className="py-4 px-8 border-primary-300"
      style={{ borderLeftWidth: '10px' }}
    >
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: text }} />
      <Link>{btnText}</Link>
    </div>
  );
};

export default SmallCard;
