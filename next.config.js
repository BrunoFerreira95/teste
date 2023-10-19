const million = require('million/compiler');
/** @type {import('next').NextConfig} */

const path = require("path");

const withPWA = require("next-pwa");

const nextConfig = {
    ...withPWA({
      dest: "public",
      register: true,
      shipWaiting: true,
    }),
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/fonts/",
            publicPath: "_next/static/fonts/",
            context: path.resolve(__dirname, "assets/fonts/"),
          },
        },
      });
  
      // Add support for MP3 files
      config.module.rules.push({
        test: /\.(mp3)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "/",
          },
        },
      });
  
      // Add support for PDF files
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/pdf/",
            publicPath: "_next/static/pdf/",
          },
        },
      });
      return config;
    },
  };
  
  module.exports = million.next(
  nextConfig, { auto: { rsc: true } }
);
  