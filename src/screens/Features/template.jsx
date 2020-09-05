import React from 'react';
import Img from 'gatsby-image';

import Background from '../../images/backgrounds/features_background.svg';

import Layout from '../../components/Layout';
import Button from '../../components/Button';
import FeatureSection from '../../components/FeatureSection';

const Features = ({ data }) => {
  const { featuresPageData, background, dashboardImage } = data;
  const { title, subtitle, btnTexts, dashboard } = featuresPageData.frontmatter;
  console.log(data);
  return (
    <Layout activePage="Features" activeRoute="/features">
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
      <section className="relative container mx-auto pt-32 sm:pt-40 md:pt-48 lg:pt-64 space-y-32 flex flex-col justify-center md:pb-32">
        <div className="px-8 text-primary-300 space-y-4 md:pl-16">
          <div>
            <h1 className="sm:title title-sm break-words font-bold">{title}</h1>
            <h3 className="cm-h4 sm:cm-h2">{subtitle}</h3>
          </div>
          <div className="flex flex-col space-y-4 items-start sm:flex-row sm:space-y-0 sm:space-x-8">
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
        <div className="px-8 space-y-8 flex flex-col items-center md:flex-row md:space-y-0 md:space-x-8 md:items-stretch lg:flex-col lg:space-x-0 lg:space-y-8 ">
          {/* <SmallCard {...features} />
          <SmallCard {...help} />
          <SmallCard {...aboutUs} /> */}
        </div>
        <FeatureSection {...dashboard} image={dashboardImage} />
        <FeatureSection {...dashboard} image={dashboardImage} align="right" />
      </section>
    </Layout>
  );
};

export default Features;
