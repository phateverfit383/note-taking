/**
 * @type {import('next-sitemap').IConfig}
 * @see
 */
module.exports = {
  // @todo: change to the production url
  siteUrl: "https://note-taking-app-one-phi.vercel.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
