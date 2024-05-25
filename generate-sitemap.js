import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';
import routes from './src/router/sitemapRoutes.js'; // Adjust the path to your router file

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://puppylovesuites.com' });

  // Write the sitemap to a file
  const writeStream = createWriteStream(resolve('./public/sitemap.xml'));
  sitemap.pipe(writeStream);

  // Add routes to the sitemap
  routes.forEach(route => {
    sitemap.write({ url: route.path, changefreq: 'daily', priority: 0.8 });
  });

  sitemap.end();

  await streamToPromise(sitemap);

  console.log('Sitemap generated successfully!');
};

generateSitemap();