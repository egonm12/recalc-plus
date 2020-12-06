import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";

export const NewPageTemplate: React.FC = () => {
  return (
    <div>
      <section></section>
    </div>
  );
};

const NewPage: React.FC = () => {
  return (
    <Layout>
      <NewPageTemplate />
    </Layout>
  );
};

export default NewPage;

export const pageQuery = graphql`
  query NewPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "new-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
