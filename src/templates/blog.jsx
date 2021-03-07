import clsx from "clsx";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { FiExternalLink, FiShare2 } from "react-icons/fi";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Template = ({ data }) => {
  const {
    mdx: { frontmatter, body },
    site: { siteMetadata },
  } = data;

  const [canShare, setCanShare] = React.useState(false);
  const title = React.useMemo(
    () => encodeURIComponent(frontmatter.title + " | " + siteMetadata.title),
    [frontmatter, siteMetadata],
  );
  const url = React.useMemo(() => (window ? window.location.href : ""), [
    window,
  ]);

  const share = React.useCallback(() => {
    navigator.share({
      title,
      url,
    });
  }, [frontmatter]);

  React.useEffect(() => {
    if (navigator.share) {
      setCanShare(true);
    }
  }, []);

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        article
      />
      <div
        className={clsx(
          "px-4",
          "md:px-8",
          "py-8",
          "mx-auto",
          "max-w-screen-lg",
        )}>
        <Link
          to="/blog"
          className={clsx(
            "flex",
            "items-center",
            "px-2",
            "my-2",
            "transition-colors",
            "hover:text-red-500",
          )}>
          <BsChevronDoubleLeft />
          <span className={clsx("ml-2")}>Back to Posts</span>
        </Link>
        <p className={clsx("mb-2", "text-red-400")}>{frontmatter.topic}</p>
        <h1 className={clsx("text-4xl", "mb-2", "leading-10")}>
          {frontmatter.title}
        </h1>
        <p className={clsx("mb-4")}>{frontmatter.date}</p>
        <p className={clsx("mb-2", "text-gray-800")}>
          {frontmatter.description}
        </p>
        <hr className={clsx("border-gray-300", "mb-4")} />
        <div className={clsx("p-4", "flex")}>
          <div
            className={clsx(
              "inline-block",
              "w-16",
              "h-16",
              "rounded-full",
              "overflow-hidden",
              "ring-4",
              "ring-red-100",
              "mr-4",
            )}>
            <Img
              className={clsx("object-cover")}
              fluid={frontmatter.author.image.childImageSharp.fluid}
            />
          </div>
          <div>
            <div className={clsx("flex", "items-center")}>
              <span
                className={clsx("font-bold", "mr-2")}
                itemProp="author"
                name={frontmatter.author.name}>
                {frontmatter.author.name}
              </span>
              <a
                href={frontmatter.author.website}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  "text-red-500",
                  "transition-colors",
                  "hover:text-red-700",
                )}>
                <FiExternalLink />
              </a>
            </div>
            <p>{frontmatter.author.tagline}</p>
          </div>
        </div>
        <div className={clsx("max-h-96", "overflow-hidden", "mb-8")}>
          <Img
            className={clsx("object-contain")}
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
          />
        </div>
        <div className={clsx("mb-4")}>
          {canShare ? (
            <button
              className={clsx("hover:text-red-400", "transition-colors")}
              onClick={share}>
              <span className={clsx("mr-2")}>Share Post</span>
              <FiShare2 />
            </button>
          ) : (
            <a
              className={clsx(
                "hover:text-red-400",
                "transition-colors",
                "flex",
                "items-center",
              )}
              href={`https://hyperlinkr.netlify.app/?url=${window.location.href}&title=${title}`}
              target="_blank"
              rel="noopener noreferrer">
              <span className={clsx("mr-2")}>Share Post</span>
              <FiShare2 />
            </a>
          )}
        </div>
        <article itemScope itemType="http://schema.org/Article">
          <meta itemProp="datePublished" content={frontmatter.date} />
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </div>
    </Layout>
  );
};

export default Template;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        slug
        title
        topic
        description
        date(formatString: "DD MMMM, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        author {
          name
          tagline
          website
          image {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        tags {
          name
          color
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
