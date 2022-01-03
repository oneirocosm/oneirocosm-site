export default {
  renderers: ['@astrojs/renderer-preact'],
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  public: 'static',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  dist: 'public',       // When running `astro build`, path to final static output
  buildOptions: {
    //site: 'https://oneirocosm.com',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    site: '',
    sitemap: true,         // Generate sitemap (set to "false" to disable)
  },
  devOptions: {
    // hostname: 'localhost',  // The hostname to run the dev server on.
    // port: 3000,             // The port to run the dev server on.
  },
};
