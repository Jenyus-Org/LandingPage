import { useLocation } from "@reach/router";
import clsx from "clsx";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import {
  BsArrowRightShort,
  BsChevronDoubleLeft,
  BsLink45Deg,
} from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaReddit, FaTwitter } from "react-icons/fa";
import { FiExternalLink, FiShare2 } from "react-icons/fi";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Template = ({ data }) => {
  const { pathname } = useLocation();

  const {
    mdx: { frontmatter, body },
    site: { siteMetadata },
  } = data;

  const [canShare, setCanShare] = React.useState(false);

  const title = React.useMemo(
    () => `${frontmatter.title} | ${siteMetadata.title}`,
    [frontmatter, siteMetadata],
  );

  const encodedTitle = React.useMemo(() => encodeURIComponent(title), [title]);

  const url = React.useMemo(() => `${siteMetadata.siteUrl}${pathname}`, [
    siteMetadata,
    pathname,
  ]);

  const encodedUrl = React.useMemo(() => encodeURIComponent(url), [url]);

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
        image={frontmatter.featuredImage.childImageSharp.fixed.src}
        keywords={frontmatter.tags.map((tag) => tag.name)}
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
        <div>
          <p className={clsx("mb-2", "text-red-400")}>{frontmatter.topic}</p>
          <h1 className={clsx("text-4xl", "mb-2", "leading-10")}>
            {frontmatter.title}
          </h1>
          <p className={clsx("mb-4")}>
            {frontmatter.date}
            {frontmatter.updatedAt && (
              <span className={clsx("text-gray-400", "italic")}>
                <br />
                Last updated at {frontmatter.updatedAt}.
              </span>
            )}
          </p>
          <p className={clsx("mb-2", "text-gray-800")}>
            {frontmatter.description}
          </p>
        </div>
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
              "mr-4",
              "flex-shrink-0",
            )}
            style={{ "--tw-ring-color": frontmatter.author.color }}>
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
              className={clsx(
                "hover:text-red-400",
                "transition-colors",
                "flex",
                "items-center",
              )}
              onClick={share}>
              <span className={clsx("mr-2")}>Share Post</span>
              <FiShare2 />
            </button>
          ) : (
            <div className={clsx("flex", "items-center")}>
              <span className={clsx("mr-3")}>Share</span>
              <a
                className={clsx(
                  "hover:text-red-500",
                  "transition-colors",
                  "mr-3",
                  "text-2xl",
                )}
                href={`https://reddit.com/submit/?url=${encodedUrl}&title=${encodedTitle}&resubmit=true`}
                target="_blank"
                rel="noopener noreferrer">
                <FaReddit />
              </a>
              <a
                className={clsx(
                  "hover:text-blue-500",
                  "transition-colors",
                  "mr-3",
                  "text-2xl",
                )}
                href={`https://twitter.com/intent/tweet/?url=${encodedUrl}&text=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a
                className={clsx(
                  "hover:text-blue-500",
                  "transition-colors",
                  "mr-3",
                  "text-2xl",
                )}
                href={`https://www.linkedin.com/shareArticle/?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a
                className={clsx(
                  "hover:text-blue-500",
                  "transition-colors",
                  "mr-3",
                  "text-2xl",
                )}
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a
                className={clsx(
                  "hover:text-green-500",
                  "transition-colors",
                  "text-2xl",
                )}
                href={`https://hyperlinkr.netlify.app/?url=${encodedUrl}&title=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer">
                <BsLink45Deg />
              </a>
            </div>
          )}
        </div>
        <article itemScope itemType="http://schema.org/Article">
          <meta itemProp="datePublished" content={frontmatter.date} />
          <MDXRenderer>{body}</MDXRenderer>
        </article>
        <div className={clsx("flex", "mt-4", "justify-end")}>
          <Link
            className={clsx("flex", "items-center", "hover:text-red-500")}
            to={`/blog?author=${frontmatter.author.name}`}>
            <span>More by the author</span>
            <BsArrowRightShort />
          </Link>
        </div>
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
        updatedAt(formatString: "DD MMMM, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
            fixed(width: 800) {
              src
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
          color
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
        siteUrl
      }
    }
  }
`;
