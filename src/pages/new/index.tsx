import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { Hero } from "../../modules/Hero/Hero";
import { Features } from "../../modules/Features/Features";

export const NewPageTemplate: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
    </>
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
