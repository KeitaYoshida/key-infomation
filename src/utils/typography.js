import Typography from "typography"
import Github from "typography-theme-github"

Github.bodyFontFamily = ['Noto Sans JP', Github.bodyFontFamily]
Github.headerFontFamily = ['Noto Sans JP', Github.bodyFontFamily]
Github.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Github.googleFonts

const typography = new Typography(Github)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale