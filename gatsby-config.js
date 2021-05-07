require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    siteMetadata: {
        description: "Portfolio of Soh Zu Wei",
        locale: "en",
        title: "Soh Zu Wei | Portfolio",
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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "G-6KHSKG1D6F",
            },
        },
    ],
};
