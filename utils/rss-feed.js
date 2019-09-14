import { posts } from "./post-list";
import { config } from "../config/config.yml";

const fs = require("fs");
const path = require("path");
const postList = Promise.all([posts()]).then(posts => {

  // https://jsonfeed.org/version/1
  const feed = {
    version: "https://jsonfeed.org/version/1",
    title: config.blogTitle,
    home_page_url: config.siteName,
    feed_url: `${config.siteName}/feed.json`,
    description: config.siteDescription,
    icon: `${config.siteName}/static/icon-152.png`,
    favicon: `${config.siteName}/static/favicon.ico`,
    author: {
      name: config.author,
      url: config.siteName,
      avatar: `${config.siteName}/static/images/profile.jpg`
    },
    items: posts[0].map(post => ({
      id: `${config.siteName}${post.fullUrlPath}`,
      url: `${config.siteName}${post.fullUrlPath}`,
      title: post.title,
      content_text: `${post.seoDescription} - ${config.siteName}${post.fullUrlPath}`,
      summary: post.seoDescription,
      image: `${config.siteName}${post.image}`,
      date_published: post.publishDate,
      author: config.author
    }))
  };

  fs.writeFileSync(
    path.join("./.next/", "feed.json"),
    JSON.stringify(feed)
  );
});