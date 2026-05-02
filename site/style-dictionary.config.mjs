export default {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'de',
      buildPath: 'src/styles/',
      files: [
        {
          // Generated file. Edit tokens/*.json, then run `npm run tokens`.
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        }
      ]
    }
  }
};
