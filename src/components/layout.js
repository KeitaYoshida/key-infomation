import React from "react"
import { Link } from "gatsby"
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';
import style from 'styled-components';

import { rhythm } from "../utils/typography"

const BaseStyle = style.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const InToolbar = style(Toolbar)`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  h6 {
    color: white;
  }
`
const ElseInToolbar = style(InToolbar)`
  padding: 0 ${rhythm(3 / 4)};
`

const LinkStyle = style(Link)`
  boxShadow: none;
  color: inherit;
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const inToolbar = (<Typography variant="h6"><LinkStyle to={`/`}>{title}</LinkStyle></Typography>)
  const header =
    location.pathname === rootPath ?
      (<AppBar position="fixed"><InToolbar>{inToolbar}</InToolbar></AppBar>) :
      (<AppBar position="fixed"><ElseInToolbar>{inToolbar}</ElseInToolbar></AppBar>)

  return (
    <BaseStyle>
      {header}
      <Toolbar />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </BaseStyle>
  )
}

export default Layout
