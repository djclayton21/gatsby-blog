import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";

const ArchiveList = styled.aside`
  margin: 0;
  padding: 0;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
    font-weight: 700;
  }
`;

const POST_ARCHIVE_QUERY = graphql`
  query ArchiveQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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
      <ArchiveList>
        {allMarkdownRemark.nodes.map(({ frontmatter }) => {
          return (
            <li key={frontmatter.slug}>
              <Link to={`/posts/${frontmatter.slug}`}>{frontmatter.title}</Link>
            </li>
          );
        })}
      </ArchiveList>
    </aside>
  );
}

export default Archive;
