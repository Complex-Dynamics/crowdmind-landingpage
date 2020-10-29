import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Menu } from '@material-ui/icons';

import Logo from '../../images/icons/icon_color.svg';

import Button from '../Button';

const Navbar = ({ activeRoute }) => {
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

  const getActiveStyle = (requiredRoute) => {
    if (requiredRoute === activeRoute) {
      return 'font-bold';
    }
  };

  return (
    <nav className="fixed z-50 w-full top-0">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <Link to="/">
          <img src={Logo} className="w-12 h-12" alt="crowdmind logo" />
        </Link>
        <div className="uppercase cm-btn space-x-8 items-center text-primary-300 hidden sm:flex">
          <Link
            className={`transition-all duration-500 hover:text-primary-100 ${getActiveStyle(
              '/aboutUs'
            )}`}
            to="/aboutUs"
          >
            {aboutUs}
          </Link>
          <Link
            className={`transition-all duration-500 hover:text-primary-100 ${getActiveStyle(
              '/features'
            )}`}
            to="/features"
          >
            {features}
          </Link>
          <Link
            className={`transition-all duration-500 hover:text-primary-100 ${getActiveStyle(
              '/help'
            )}`}
            to="/help"
          >
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

Navbar.propTypes = {
  activeRoute: PropTypes.string
};

export default Navbar;
