// Generated using webpack-cli https://github.com/webpack/webpack-cli

import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === "production";

/** @type {import("webpack").Configuration} */
const config = {
    // The page itself is the entry: webpack bundles the scripts and stylesheets
    // it references and emits it as `dist/index.html`.
    entry: { index: "./index.html" },
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        open: true,
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                type: "css/auto",
                use: ["sass-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },

            // HTML, CSS need no loader — webpack supports them out of the box
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

export default () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};
