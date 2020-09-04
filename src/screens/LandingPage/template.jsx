import React from 'react';
import Img from 'gatsby-image';

import Layout from '../../components/Layout';

import Background from '../../images/backgrounds/features_background.svg';
import Button from '../../components/Button';
import SmallCard from '../../components/SmallCard';

const IndexPage = ({ data }) => {
  console.log(data);
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
      <div className="absolute top-0 left-0 h-screen w-full">
        <img
          src={Background}
          className="absolute top-0 left-0 z-0 object-cover h-screen"
          alt="svg background with triangles"
        />
        <Img
          fluid={background.fluid}
          className="absolute top-0 left-0 w-3/4 h-screen object-cover"
        />
      </div>
      <section className="container mx-auto relative items-center justify-center pt-32">
        <div className="px-8 text-primary-300 space-y-4">
          <div>
            <h1
              className="sm:title title-sm break-words"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <h3 className="cm-h4">{subtitle}</h3>
          </div>
          <Button variant="white" className="cm-shadow-300">
            {btnText}
          </Button>
        </div>
        <div>
          <SmallCard {...features} />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
