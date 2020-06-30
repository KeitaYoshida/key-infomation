import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const BlogBody = styled.section`
  h1, h2, h3, h4, h5, h6, p, span {
    white-space: pre-wrap;
  }
  h2, h3, h4, li {
    margin-top: 2rem;
  }
  p, li {
    line-height: 2;
  }
  .grvsc-container {
    font-family: 'Noto Sans JP', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI',
      'Helvetica Neue', 'Hiragino Kaku Gothic ProN', '"Yu Gothic"', 'YuGothic',
      'Verdana', 'Meiryo', '"M+ 1p"', 'sans-serif';
      border-top-left-radius: 0;
      border-bottom-right-radius: 0;
  }
  .gatsby-code-title {
    padding: 0.3em 0;
    color: #858886;
    z-index: 0;

    border-radius: 0.3em;
    font-size: 0.8rem;
    margin-bottom: -0.3em;
  }
  .gatsby-code-title:before { content: '[ ' }
  .gatsby-code-title:after { content: ' ]' }
`;

const Category = styled.p`
  font-size:1rem;
  color: #888;
  margin-top:0.5rem;
  margin-left:3rem;
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulBlogPost
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
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
            <br />
            <Category>{post.category.name}</Category>
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
        <BlogBody
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
  )
}

export default BlogPostTemplate

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
      category {
        name
      }
      tags
      description {
        description
      }
      publishDate(formatString: "yyyy-MM-DD")
      updatedAt(formatString: "yyyy-MM-DD")
    }
  }
`
