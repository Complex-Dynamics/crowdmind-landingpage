import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import Background from '../../images/backgrounds/features_background.svg';

import Layout from '../../components/Layout';
import Button from '../../components/Button';
import SmallCard from '../../components/SmallCard';

const LandingPage = ({ data }) => {
  const { landingPageData, background } = data;
  const {
    title,
    subtitle,
    btnText,
    features,
    help,
    aboutUs
  } = landingPageData.frontmatter;

  return (
    <Layout>
      <div className="fixed top-0 left-0 h-screen w-full">
        <img
          src={Background}
          className="absolute top-0 left-0 z-0 object-cover h-screen w-full"
          alt="svg background with triangles"
        />
        <Img
          fluid={background.fluid}
          className="absolute top-0 left-0 w-3/4 h-screen object-cover"
        />
      </div>
      <section
        className="container mx-auto relative pt-32 space-y-32 pb-16 md:pb-32 flex flex-col lg:flex-row lg:items-center justify-center lg:space-y-0 lg:py-24 lg:justify-between h-full"
        style={{ minHeight: '90vh' }}
      >
        <div className="px-8 text-primary-300 space-y-4 md:pl-16">
          <div>
            <h1
              className="sm:title title-sm break-words"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <h3 className="cm-h4 sm:cm-h2">{subtitle}</h3>
          </div>
          <Button variant="white" className="cm-shadow-300">
            {btnText}
          </Button>
        </div>
        <div className="px-8 space-y-8 flex flex-col items-center md:flex-row md:space-y-0 md:space-x-8 md:items-stretch lg:flex-col lg:space-x-0 lg:space-y-8">
          <SmallCard {...features} />
          <SmallCard {...help} />
          <SmallCard {...aboutUs} />
        </div>
      </section>
    </Layout>
  );
};

LandingPage.propTypes = {
  data: PropTypes.shape({
    landingPageData: PropTypes.object.isRequired,
    background: PropTypes.object.isRequired
  })
};

export default LandingPage;
