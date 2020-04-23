import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 24, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: black;
    text-decoration: none;
  }
  p {
    font-size: 0.8rem;
  }
  h2 {
    margin-bottom: 0;
  }
  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
    font-weight: 700;
  }
`;

const LISTING_QUERY = graphql`
  query ListingQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          date(formatString: "MMMM Do, YYYY")
          title
        }
        excerpt
      }
    }
  }
`;

function Listing() {
  const data = useStaticQuery(LISTING_QUERY);
  const articles = data.allMarkdownRemark.nodes.map(
    ({ frontmatter, excerpt }) => (
      <Post key={frontmatter.slug}>
        <Link to={`/posts/${frontmatter.slug}`}>
          <h2>{frontmatter.title}</h2>
        </Link>

        <p>{frontmatter.date}</p>
        <p>{excerpt}</p>
        <Link className="read-more" to={`/posts/${frontmatter.slug}`}>
          Read More...
        </Link>
      </Post>
    )
  );
  return <>{articles}</>;
}

export default Listing;
