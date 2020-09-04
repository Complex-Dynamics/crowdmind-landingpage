import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Watermark from '../../images/icons/watermark.svg';
import Button from '../Button';

const Footer = () => {
  const {
    footerData: {
      frontmatter: { footer }
    }
  } = useStaticQuery(graphql`
    query Footer {
      footerData: markdownRemark(
        frontmatter: { serve: { regex: "/footer/" } }
      ) {
        frontmatter {
          footer {
            imprint
            btnText
            policy
          }
        }
      }
    }
  `);

  const { btnText, imprint, policy } = footer;

  return (
    <footer className="relative z-50 w-full bg-white-200">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex-col sm:flex-row flex items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 uppercase cm-btn text-primary-300">
          <Button>{btnText}</Button>
          <Link className="hover:text-primary-100" to="/imprint">
            {imprint}
          </Link>
          <Link className="hover:text-primary-100" to="/policy">
            {policy}
          </Link>
        </div>
        <div>
          <img
            src={Watermark}
            alt="complex dynamics watermark | crowdmind is created by complex dynamics"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
