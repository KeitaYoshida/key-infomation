import Typography from "typography"
import Github from "typography-theme-github"

Github.overrideThemeStyles = () => {
  return {
    'html,body,h1,h2,h3,h4,h5,h6': {
      color: '#555',
      fontFamily: [
        'Noto Sans JP',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Helvetica Neue',
        'Hiragino Kaku Gothic ProN',
        '"Yu Gothic"',
        'YuGothic',
        'Verdana',
        'Meiryo',
        '"M+ 1p"',
        'sans-serif'
      ].join(',')
    },
    "h1": {
      fontSize: '1.5rem'
    },
    "h2": {
      fontSize: '1.3rem',
    },
    "h3": {
      fontSize: '1.1rem'
    },
    "h4": {
      fontSize: '1rem'
    },
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