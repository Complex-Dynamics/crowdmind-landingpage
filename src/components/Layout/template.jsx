import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../SEO';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ activePage, children }) => (
  <>
    <SEO activePage={activePage} />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  activePage: PropTypes.string
};

export default Layout;
