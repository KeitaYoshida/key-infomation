import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulBlogPost
  const siteTitle = data.site.siteMetadata.title
  const imageData = data.desktop.childImageSharp.fluid
  const { previous, next } = pageContext

  return (
    <StyledBackgroundSection fluid={imageData}>
      <Layout location={location} title={siteTitle}>
        <SEO title={post.title} description={post.description.description} />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.date}
            </p>
          </header>
          <section
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={"/" + previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={"/" + next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    </StyledBackgroundSection>
  )
}

export default BlogPostTemplate

const StyledBackgroundSection = styled(BackgroundImage)`
  width: 100%;
  background-position: center center;
  background-repeat: repeat-y;
  background-attachment: fixed;
  background-color: rgba(255, 255, 255, 0.9);
  background-blend-mode: lighten;
`

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      description {
        description
      }
      publishDate(formatString: "yyyy-MM-DD")
      updatedAt(formatString: "yyyy-MM-DD")
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
