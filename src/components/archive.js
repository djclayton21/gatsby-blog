import React from "react";
import { graphql, useStaticQuery } from "gatsby";

function Archive() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query ArchiveQuery {
      allMarkdownRemark(sort: { order: ASC, fields: frontmatter___date }) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            slug
          }
        }
      }
    }
  `);
  return (
    <aside>
      <h3>Archive</h3>
      <ul>
        {allMarkdownRemark.nodes.map(({ frontmatter }) => {
          return <li>{frontmatter.title}</li>;
        })}
      </ul>
    </aside>
  );
}

export default Archive;
