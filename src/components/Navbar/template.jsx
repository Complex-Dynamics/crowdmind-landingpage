import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Menu } from '@material-ui/icons';

import Logo from '../../images/icons/icon_color.svg';
import Button from '../Button';

const Navbar = () => {
  const {
    navbarData: {
      frontmatter: { navbar }
    }
  } = useStaticQuery(graphql`
    query Navbar {
      navbarData: markdownRemark(
        frontmatter: { serve: { regex: "/navbar/" } }
      ) {
        frontmatter {
          navbar {
            aboutUs
            features
            help
            btnText
          }
        }
      }
    }
  `);

  const { aboutUs, features, help, btnText } = navbar;

  return (
    <nav className="fixed z-50 w-full top-0">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div>
          <img src={Logo} className="w-12 h-12" alt="crowdmind logo" />
        </div>
        <div className="uppercase cm-btn space-x-8 items-center text-primary-300 hidden sm:flex">
          <Link className="hover:text-primary-100" to="/aboutUs">
            {aboutUs}
          </Link>
          <Link className="hover:text-primary-100" to="/features">
            {features}
          </Link>
          <Link className="hover:text-primary-100" to="/help">
            {help}
          </Link>
          <Link className="hover:text-primary-100" to="/login">
            <Button>{btnText}</Button>
          </Link>
        </div>
        <div className="sm:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
