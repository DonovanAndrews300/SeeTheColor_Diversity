import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import profile from '../images/stc.jpg'
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            url
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {name: 'og:description', content:data.site.siteMetadata.description},
            {name: 'og:title', content:data.site.siteMetadata.title},
            {name: 'og:image', content:profile},
            {name: 'og:url', content:data.site.siteMetadata.url},

          ]}
        >
          <html lang="en" />
        </Helmet>
        <div>{children}</div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
