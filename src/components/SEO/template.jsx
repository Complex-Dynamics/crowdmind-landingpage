import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ activePage }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  );

  const metaDescription = site.siteMetadata.description;
  const { title } = site.siteMetadata;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={activePage ? `${activePage} | ${title}` : title}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author
        },
        {
          name: 'twitter:title',
          content: title
        }
      ]}
    />
  );
}

SEO.propTypes = {
  activePage: PropTypes.string
};

export default SEO;
