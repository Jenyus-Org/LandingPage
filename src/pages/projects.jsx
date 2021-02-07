import clsx from "clsx";
import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ViewableMonitor from "../components/viewable-monitor";

const ProjectsPage = () => {
  const { spesenAppScreenshot, recogLogo } = useStaticQuery(
    graphql`
      query ProjectsPageQuery {
        spesenAppScreenshot: file(relativePath: { eq: "spesen_app.png" }) {
          childImageSharp {
            fluid(maxHeight: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        recogLogo: file(relativePath: { eq: "recog.png" }) {
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );

  return (
    <Layout>
      <SEO title="Projects" />
      <section
        className={clsx(
          "h-screen",
          "max-w-screen-xl",
          "mx-auto",
          "flex",
          "items-center",
          "justify-center",
        )}>
        <div className={clsx("flex", "flex-col")}>
          <h1 className={clsx("font-title", "text-5xl", "md:text-6xl", "mb-4")}>
            Projects
          </h1>
          <p className={clsx("text-gray-400")}>
            Take a look at some projects built by Jenyus to see what we're all
            about.
          </p>
        </div>
      </section>
      <ViewableMonitor threshold={0.25}>
        {(visible) => (
          <motion.article
            className={clsx(
              "flex",
              "flex-wrap",
              "items-stretch",
              "h-screen",
              "justify-between",
              "flex-col",
              "md:flex-row",
            )}
            initial={false}
            animate={visible ? "visible" : "hidden"}>
            <motion.div
              className={clsx(
                "flex-1",
                "flex",
                "justify-center",
                "items-center",
                "bg-gradient-to-br",
                "from-blue-700",
                "to-red-400",
                "h-full",
              )}
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    y: { stiffness: 1000, velocity: -100 },
                  },
                },
                hidden: {
                  y: 50,
                  opacity: 0,
                  transition: {
                    y: { stiffness: 1000 },
                  },
                },
              }}>
              <Img
                className={clsx("h-full", "md:h-3/4", "w-full", "m-6")}
                imgStyle={{ objectFit: "contain" }}
                fluid={spesenAppScreenshot?.childImageSharp.fluid}
              />
            </motion.div>
            <div
              className={clsx(
                "flex-1",
                "flex",
                "flex-col",
                "items-center",
                "justify-center",
              )}>
              <motion.div
                className={clsx("p-8", "md:p-16")}
                transition={{ staggerChildren: 0.07 }}>
                <motion.h2
                  className={clsx("text-2xl")}
                  variants={{
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        y: { stiffness: 1000, velocity: -100 },
                      },
                    },
                    hidden: {
                      y: 50,
                      opacity: 0,
                      transition: {
                        y: { stiffness: 1000 },
                      },
                    },
                  }}>
                  Spesen App
                </motion.h2>
                <br />
                <motion.p
                  variants={{
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        y: { stiffness: 1000, velocity: -100 },
                      },
                    },
                    hidden: {
                      y: 50,
                      opacity: 0,
                      transition: {
                        y: { stiffness: 1000 },
                      },
                    },
                  }}>
                  Spesen App is a web app custom-built for the alte Kanti Aarau.
                  By leveraging the capabilities of modern single-page apps, and
                  NodeJS based webservers, teachers can make requests for
                  vacation and compensation through a mobile accessible website
                  and view their grants as well as other history directly using
                  their active directory logins.
                </motion.p>
              </motion.div>
            </div>
          </motion.article>
        )}
      </ViewableMonitor>
      <ViewableMonitor threshold={0.25}>
        {(visible) => (
          <motion.article
            className={clsx(
              "flex",
              "flex-wrap",
              "items-stretch",
              "h-screen",
              "justify-between",
              "flex-col",
              "md:flex-row",
            )}
            initial={false}
            animate={visible ? "visible" : "hidden"}>
            <div
              className={clsx(
                "flex-1",
                "flex",
                "flex-col",
                "items-center",
                "justify-center",
              )}>
              <motion.div
                className={clsx("p-8", "md:p-16")}
                transition={{ staggerChildren: 0.07 }}>
                <motion.h2
                  className={clsx("text-2xl")}
                  variants={{
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        y: { stiffness: 1000, velocity: -100 },
                      },
                    },
                    hidden: {
                      y: 50,
                      opacity: 0,
                      transition: {
                        y: { stiffness: 1000 },
                      },
                    },
                  }}>
                  Recog
                </motion.h2>
                <br />
                <motion.p
                  variants={{
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        y: { stiffness: 1000, velocity: -100 },
                      },
                    },
                    hidden: {
                      y: 50,
                      opacity: 0,
                      transition: {
                        y: { stiffness: 1000 },
                      },
                    },
                  }}>
                  Recog is a forum built in collaboration with the alte Kanti
                  Aarau. It aims to connect students and business acquaintances
                  across Switzerland with another and create a platform on which
                  collaboration and a modern take on education is effortless.
                </motion.p>
              </motion.div>
            </div>
            <motion.div
              className={clsx(
                "flex-1",
                "flex",
                "justify-center",
                "items-center",
                "bg-gradient-to-br",
                "from-blue-700",
                "to-red-400",
                "h-full",
              )}
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    y: { stiffness: 1000, velocity: -100 },
                  },
                },
                hidden: {
                  y: 50,
                  opacity: 0,
                  transition: {
                    y: { stiffness: 1000 },
                  },
                },
              }}>
              <Img
                className={clsx("h-full", "w-3/4", "md:w-1/2", "m-6")}
                imgStyle={{ objectFit: "contain" }}
                fluid={recogLogo?.childImageSharp.fluid}
              />
            </motion.div>
          </motion.article>
        )}
      </ViewableMonitor>
    </Layout>
  );
};

export default ProjectsPage;
