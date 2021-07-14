import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Hero } from "../modules/Hero/Hero";
import { Features } from "../modules/Features/Features";

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
    query NewIndexPageTemplate {
      markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          subheading
          mainpitch {
            title
            description
          }
          description
          intro {
            blurbs {
              image {
                childImageSharp {
                  fluid(maxWidth: 240, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              text
            }
            heading
            description
          }
        }
      }
    }
`;
