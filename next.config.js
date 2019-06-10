const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withMdx = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
});

module.exports = withMdx(
  withSass(
    withCss({
      pageExtensions: ['js', 'jsx', 'md', 'mdx']
    })
  )
);
