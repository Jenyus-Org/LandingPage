import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import logo from "../images/jenyus.png";

function SEO({ description, lang, keywords, title, children, article }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  );

  const seo = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    image: logo,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <meta name="description" content={seo.description} />
      {seo.image && <meta name="image" content={seo.image} />}
      <meta
        property="og:title"
        content={`${title} | ${site.siteMetadata.title}`}
      />
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="twitter:card" content="summary" />
      <meta
        property="twitter:title"
        content={`${seo.title} | ${site.siteMetadata.title}`}
      />
      <meta property="twitter:description" content={seo.description} />
      {seo.image && <meta property="twitter:image" content={seo.image} />}
      {keywords.length && (
        <meta name="keywords" content={keywords.join(`, `)} />
      )}
      {children}
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  description: ``,
  article: false,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  article: PropTypes.bool,
};

export default SEO;
