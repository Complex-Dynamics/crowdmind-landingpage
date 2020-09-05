import { graphql } from 'gatsby';

import LandingPage from './template';

export const pageQuery = graphql`
  query LandingPage {
    landingPageData: markdownRemark(
      frontmatter: { templateKey: { eq: "LandingPage" } }
    ) {
      frontmatter {
        title
        subtitle
        btnText
        features {
          title
          text
          btnText
          btnTo
        }
        help {
          title
          text
          btnText
          btnTo
        }
        aboutUs {
          title
          text
          btnText
          btnTo
        }
      }
    }
    background: imageSharp(
      fluid: { originalName: { regex: "/background_2/" } }
    ) {
      fluid(maxWidth: 3000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default LandingPage;
