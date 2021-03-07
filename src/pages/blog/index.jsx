import clsx from "clsx";
import Img from "gatsby-image";
import * as React from "react";
import { BsSearch } from "react-icons/bs";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { graphql, Link } from "gatsby";

const BlogIndex = ({ data }) => {
  const {
    allMdx: { edges },
  } = data;

  const topics = React.useMemo(
    () =>
      edges.reduce(
        (acc, { node }) =>
          acc.indexOf(node.frontmatter.topic) === -1
            ? [...acc, node.frontmatter.topic]
            : acc,
        [],
      ),
    [edges],
  );

  const [topicFilter, setTopicFilter] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const posts = React.useMemo(
    () =>
      edges
        .map(({ node }) => node.frontmatter)
        .filter((post) =>
          topicFilter.length ? topicFilter.indexOf(post.topic) !== -1 : true,
        )
        .filter((post) =>
          search
            ? post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
              post.description.toLowerCase().indexOf(search.toLowerCase()) !==
                -1 ||
              post.author.name.toLowerCase().indexOf(search.toLowerCase()) !==
                -1
            : true,
        ),
    [edges, topicFilter, search],
  );

  return (
    <Layout>
      <SEO title="Blog" />
      <div className={clsx("mb-16")}>
        <h1
          className={clsx("text-4xl", "text-red-400", "mb-8", "p-8", "shadow")}>
          Blog
        </h1>
      </div>
      <div
        className={clsx("px-4", "md:px-8", "flex", "flex-col", "md:flex-row")}>
        <div
          className={clsx(
            "flex",
            "flex-row",
            "md:flex-col",
            "justify-between",
            "md:justify-start",
            "px-8",
            "items-start",
            "md:max-w-sm",
            "flex-wrap",
            "mb-6",
          )}>
          <div
            className={clsx(
              "rounded-full",
              "shadow",
              "px-4",
              "py-2",
              "inline-flex",
              "items-center",
              "mr-4",
              "mb-4",
              "md:mb-6",
              "md:mr-0",
              "flex-grow-0",
            )}>
            <input
              className={clsx("focus:outline-none")}
              placeholder="Search"
              onChange={({ target }) => setSearch(target.value)}
              value={search}
            />
            <BsSearch className={clsx("text-gray-500")} />
          </div>
          <div>
            <p className={clsx("font-bold", "mb-4")}>Topics</p>
            <div className={clsx("flex", "items-center", "flex-wrap")}>
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() =>
                    topicFilter.indexOf(topic) === -1
                      ? setTopicFilter([...topicFilter, topic])
                      : setTopicFilter(topicFilter.filter((t) => t !== topic))
                  }
                  className={clsx(
                    "rounded-full",
                    "border-red-500",
                    "border",
                    "py-1",
                    "px-2",
                    "transition-colors",
                    "hover:bg-red-200",
                    "cursor-pointer",
                    "focus:outline-none",
                    "whitespace-nowrap",
                    "mr-2",
                    "mb-2",
                    topicFilter.indexOf(topic) === -1 && ["text-red-500"],
                    topicFilter.indexOf(topic) !== -1 && [
                      "bg-red-500",
                      "text-white",
                    ],
                  )}>
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "grid",
            "md:grid-cols-2",
            "xl:grid-cols-3",
            "2xl:grid-cols-4",
            "gap-4",
            "flex-grow",
          )}>
          {posts.map((post) => (
            <Link
              to={`/blog/${post.date}-${post.slug}`}
              key={post.slug}
              className={clsx(
                "shadow-md",
                "p-4",
                "rounded",
                "flex",
                "flex-col",
                "transition-shadow",
                "hover:shadow-lg",
              )}>
              <div className={clsx("overflow-hidden", "mb-4", "max-h-52")}>
                <Img
                  className={clsx("object-contain")}
                  fluid={post.featuredImage.childImageSharp.fluid}
                />
              </div>
              <div className={clsx("flex", "uppercase", "text-gray-400")}>
                <span>{post.formattedDate}</span>
                <span className={clsx("mx-2", "font-bold")}>&middot;</span>
                <span>{post.author.name}</span>
              </div>
              <p
                className={clsx(
                  "font-bold",
                  "text-lg",
                  "leading-6",
                  "mb-1",
                  "text-red-500",
                )}>
                {post.title}
              </p>
              <div className={clsx("flex", "mb-3")}>
                {post.tags.map((tag) => (
                  <div
                    key={tag.name}
                    className={clsx(
                      "rounded-full",
                      "px-1",
                      "text-sm",
                      "text-white",
                      "mr-2",
                    )}
                    style={{ backgroundColor: tag.color }}>
                    {tag.name}
                  </div>
                ))}
              </div>
              <p className={clsx("text-gray-600", "mt-auto")}>
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            slug
            title
            topic
            description
            formattedDate: date(formatString: "DD MMMM, YYYY")
            date(formatString: "YYYY-MM-DD")
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
      }
    }
  }
`;
