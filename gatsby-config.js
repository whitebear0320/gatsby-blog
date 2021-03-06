require("dotenv").config()


module.exports = {
  siteMetadata: {
    title: 'Dev Blog',
    description: 'Gatsbyで作成したブログサイトです。',
    author: 'Engineer Daisuke'
  },

  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_API_KEY
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    }
  ],
}
