import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import Button from '../../components/Button';
import FeatureSection from '../../components/FeatureSection';

const Features = ({ data }) => {
  const { featuresPageData, background, dashboardImage } = data;
  const {
    title,
    subtitle,
    btnTexts,
    dashboard,
    createSurveys,
    analyzeResults
  } = featuresPageData.frontmatter;

  return (
    <Layout
      activePage="Features"
      activeRoute="/features"
      background={background}
    >
      <section className="relative container mx-auto pt-32 sm:pt-40 md:pt-48 lg:pt-64 space-y-32 flex flex-col justify-center pb-32">
        <div className="px-8 text-primary-300 space-y-4 md:pl-16">
          <div>
            <h1 className="sm:title title-sm break-words font-bold">{title}</h1>
            <h3 className="cm-h4 sm:cm-h2">{subtitle}</h3>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8 max-w-170 sm:max-w-full">
            <Button variant="white" className="cm-shadow-300">
              {btnTexts.dashboard}
            </Button>
            <Button variant="white" className="cm-shadow-300">
              {btnTexts.createSurveys}
            </Button>
            <Button variant="white" className="cm-shadow-300">
              {btnTexts.analyzeResults}
            </Button>
          </div>
        </div>
        <FeatureSection {...dashboard} image={dashboardImage} />
        <FeatureSection
          {...createSurveys}
          image={dashboardImage}
          align="right"
        />
        <FeatureSection {...analyzeResults} image={dashboardImage} />
      </section>
    </Layout>
  );
};

FeatureSection.propTypes = {
  data: PropTypes.shape({
    featuresPageData: PropTypes.object.isRequired,
    background: PropTypes.shape({
      fluid: PropTypes.object.isRequired
    }).isRequired,
    dashboardImage: PropTypes.shape({
      fluid: PropTypes.object.isRequired
    }).isRequired
  }).isRequired
};

export default Features;
