const fs = require('fs');
const database = require('../public/database/movies.json')

const DOMAIN_BASE = 'https://cinedantan.com/'
const DETAIL_TERMINAISON = 'details/'

const nodeBtoa = (string) => Buffer.from(string).toString('base64')
const urlToXmlUrlTag = (url) => `<url><loc>${url}</loc><changefreq>monthly</changefreq></url>`
const wrapSiteMapInsideXmlHeaders = (siteMap) =>`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    ${siteMap}
</urlset>`


let sitemapXml =  urlToXmlUrlTag(DOMAIN_BASE)
sitemapXml += urlToXmlUrlTag(DOMAIN_BASE+'about')
sitemapXml += database.map(
    i => urlToXmlUrlTag(DOMAIN_BASE + DETAIL_TERMINAISON + nodeBtoa(i.imdb))).join('\n')


fs.writeFileSync("sitemap.xml", wrapSiteMapInsideXmlHeaders(sitemapXml));