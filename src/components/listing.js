import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

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
      <article key={frontmatter.slug}>
        <Link to={`/posts/${frontmatter.slug}`}>
          <h2>{frontmatter.title}</h2>
        </Link>

        <p>{frontmatter.date}</p>
        <p>{excerpt}</p>
        <Link to={`/posts/${frontmatter.slug}`}>Read More...</Link>
      </article>
    )
  );
  return <>{articles}</>;
}

export default Listing;
