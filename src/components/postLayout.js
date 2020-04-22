import React from "react";
import Layout from "./layout";
import { graphql } from "gatsby";

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        slug
      }
      html
    }
  }
`;

function PostLayout({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export default PostLayout;
