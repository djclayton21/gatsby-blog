import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import logo from '../images/logo.svg'

const HeaderWrapper = styled.div`
  background: #524763;
  padding: 1rem;
  margin-bottom: 1.45rem;
  h1 {
    margin: 0;
    color: white;
    text-decoration: none;
  }
  img {
    width: 200px;
    margin: 0;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <h1 style={{ margin: 0 }}>
      <Link to="/">
        <img src={logo} alt="Level Up Tutorials Logo" />
      </Link>
    </h1>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
