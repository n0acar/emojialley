import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            image
          }
        }
      }
    `
  );

  const title = site.siteMetadata.title;
  const keywords = site.siteMetadata.keywords;
  const metaDescription = site.siteMetadata.description;

  return (
    <Helmet
      title={title}
      link={[{ rel: `icon`, type: `image/x-icon`, href: `/favicon.ico` }]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: site.siteMetadata?.image,
        },
        {
          name: `twitter:image`,
          content: site.siteMetadata?.image,
        },
      ]}
    />
  );
};

export default SEO;
