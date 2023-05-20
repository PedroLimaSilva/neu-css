import path from "path";

export default {
  build: {
    entry: path.resolve(__dirname, 'src/main.js'),
    outDir: 'docs',
  },
};
