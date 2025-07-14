const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://www.creditmax.in' });

const pages = [
  '/', 
  '/business-loan', 
  '/mortgage-loan', 
  '/home-loan', 
  '/personal-loan', 
  '/emi-calculator', 
  '/contact', 
  '/unsecured-business-loan-mumbai'
];

pages.forEach(url => sitemap.write({ url }));

sitemap.end();

streamToPromise(sitemap).then(data => {
  createWriteStream('./public/sitemap.xml').end(data);
});
