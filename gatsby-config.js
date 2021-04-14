module.exports = {
  siteMetadata: {
    description: "Portfolio of Soh Zu Wei",
    locale: "en",
    title: "Soh Zu Wei",
    formspreeEndpoint: "https://formspree.io/f/mnqlqklk",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "classic",
      },
    },
  ],
}