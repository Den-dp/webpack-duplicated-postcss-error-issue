import MiniCssExtractPlugin from "mini-css-extract-plugin";

function postcssErrorOnImportant() {
  return {
    postcssPlugin: "postcss-errror-on-important",
    Declaration(decl) {
      if (decl.important) {
        throw decl.error("Dont use !important", { word: "!important" });
      }
    },
  };
}

const postcssOptions = {
  plugins: [postcssErrorOnImportant()],
};

export default {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: { postcssOptions },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
