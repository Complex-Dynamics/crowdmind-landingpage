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
        }
        help {
          title
          text
          btnText
        }
        aboutUs {
          title
          text
          btnText
        }
      }
    }
    background: imageSharp(
      fluid: { originalName: { regex: "/background_2/" } }
    ) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default LandingPage;
