import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const POST_ARCHIVE_QUERY = graphql`
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
`;

function Archive() {
  const { allMarkdownRemark } = useStaticQuery(POST_ARCHIVE_QUERY);
  return (
    <aside>
      <h3>Archive</h3>
      <ul>
        {allMarkdownRemark.nodes.map(({ frontmatter }) => {
          return (
            <li key={frontmatter.slug}>
              <Link to={`/posts/${frontmatter.slug}`}>{frontmatter.title}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Archive;
