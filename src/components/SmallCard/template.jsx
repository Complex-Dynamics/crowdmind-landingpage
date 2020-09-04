import React from 'react';
import { Link } from 'gatsby';
import { ChevronRight } from '@material-ui/icons';

const SmallCard = ({ title, text, btnText, btnTo }) => {
  return (
    <div
      className="py-2 px-4 border-primary-300 bg-white-100 space-y-4 rounded-lg max-w-sm w-full flex-col justify-between flex"
      style={{ borderLeftWidth: '15px' }}
    >
      <div className="space-y-2">
        <h2 className="cm-h2 text-primary-300 capitalize">{title}</h2>
        <p
          className="cm-p3 text-black-300"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      <Link className="flex items-center text-primary-300 uppercase cm-btn hover:text-primary-100 transition-all duration-500">
        <ChevronRight />
        {btnText}
      </Link>
    </div>
  );
};

export default SmallCard;
