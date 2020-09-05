import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../SEO';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ activePage, children, activeRoute }) => (
  <section
    style={{ minHeight: '100vh' }}
    className="flex flex-col justify-between"
  >
    <SEO activePage={activePage} />
    <Navbar activeRoute={activeRoute} />
    <main>{children}</main>
    <Footer />
  </section>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  activePage: PropTypes.string
};

export default Layout;
