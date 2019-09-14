module.exports = (phase, { defaultConfig }) => {
  const fs = require("fs");
  const path = require("path");
  const { promisify } = require("util");
  const copyFile = promisify(fs.copyFile);
  const withFonts = require("next-fonts");
  const images = require("remark-images");
  const emoji = require("remark-emoji");
  const withOptimizedImages = require("next-optimized-images");
  const withMDX = require("@zeit/next-mdx")({
    // parse mdx files
    extension: /\.mdx?$/,
    options: {
      mdPlugins: [images, emoji]
    }
  });

  return withFonts(
    withOptimizedImages(
      withMDX({
        pageExtensions: ["js", "jsx", "md", "mdx"],
        exportPathMap: async function(
          defaultPathMap,
          { dev, dir, outDir, distDir, buildId }
        ) {
          console.log(dir);
          console.log(outDir);
          console.log(distDir);
          if (dev) {
            return defaultPathMap;
          }
          await copyFile(
            path.join(dir, "my-worker.js"),
            path.join(outDir, "my-worker.js")
          );

          await copyFile(
            path.join(distDir, "feed.json"),
            path.join(outDir, "feed.json")
          );
          return defaultPathMap;
        },
        webpack: function(config, { dev }) {
          config.node = {
            fs: "empty"
          };
          // parse yaml so we can use config.yml
          config.module.rules.push({
            test: /\.ya?ml$/,
            use: "js-yaml-loader"
          });

          if (!dev) {
            const originalEntry = config.entry;
            config.entry = async () => {
              const entries = { ...(await originalEntry()) };
              // This script imports components from the Next app, so it's transpiled to `.next/server/scripts/build-rss.js`
              entries["./utils/rss-feed.js"] = "./utils/rss-feed.js";
              return entries;
            };
          }
          return config;
        }
      })
    )
  );
};
