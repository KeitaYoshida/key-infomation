import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import CssBaseline from "@material-ui/core/CssBaseline";
import BottomInfomation from "../components/bottomInfomation"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulBlogPost.edges
  return (
    <>
      <CssBaseline />
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <article key={node.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.publishDate}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.description.description /* ||  node.excerpt */,
                  }}
                />
              </section>
            </article>
          )
        })}
        <BottomInfomation />
      </Layout>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          title
          slug
          description {
            description
          }
          publishDate(formatString: "yyyy-MM-DD")
          updatedAt(formatString: "yyyy-MM-DD")
        }
      }
    }
    desktop: file(relativePath: { eq: "keyInfoBack.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`