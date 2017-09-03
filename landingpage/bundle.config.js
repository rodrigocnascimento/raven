module.exports = {
  bundle: {
    main: {
      scripts: [
        './dist/js/main.js',
      ],
      styles: './dist/css/**/*.css',
    },
    vendor: {
      scripts: [
        './dist/js/tabs.js',
        './dist/js/bootstrap.min.js',
      ]
    }
  }
}
