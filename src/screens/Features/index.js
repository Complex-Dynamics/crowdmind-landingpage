import { graphql } from 'gatsby';

import LandingPage from './template';

export const pageQuery = graphql`
  query FeaturesPage {
    featuresPageData: markdownRemark(
      frontmatter: { templateKey: { eq: "Features" } }
    ) {
      frontmatter {
        title
        subtitle
        btnTexts {
          dashboard
          createSurveys
          analyzeResults
        }
        dashboard {
          title
          content {
            title
            text
          }
        }
        createSurveys {
          title
        }
        analyzeResults {
          title
        }
      }
    }
    background: imageSharp(
      fluid: { originalName: { regex: "/background_1/" } }
    ) {
      fluid(maxWidth: 3000) {
        ...GatsbyImageSharpFluid
      }
    }
    dashboardImage: imageSharp(
      fluid: { originalName: { regex: "/dashboard/" } }
    ) {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default LandingPage;
