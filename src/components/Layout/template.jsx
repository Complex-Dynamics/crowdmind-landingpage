import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import SEO from '../SEO';
import Navbar from '../Navbar';
import Footer from '../Footer';

import Background from '../../images/backgrounds/features_background.svg';

const Layout = ({ activePage, children, activeRoute, background }) => (
  <section
    style={{ minHeight: '100vh' }}
    className="flex flex-col justify-between"
  >
    <SEO activePage={activePage} />
    <Navbar activeRoute={activeRoute} />
    <main>
      <div className="fixed top-0 left-0 h-screen w-full">
        <img
          src={Background}
          className="absolute top-0 left-0 z-0 object-cover h-screen w-full"
          alt="svg background with triangles"
        />
        <Img
          fluid={background.fluid}
          className="absolute top-0 left-0 w-3/4 h-screen object-cover cm-shadow-100"
        />
      </div>
      {children}
    </main>
    <Footer />
  </section>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  activePage: PropTypes.string
};

export default Layout;
