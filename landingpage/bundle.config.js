module.exports = {
  bundle: {
    main: {
      scripts: [
        './js/main.js',
      ],
      styles: './css/**/*.css',
    },
    vendor: {
      scripts: [
        './js/vendor/bootstrap.min.js',
        './js/vendor/modernizr-2.6.2.min.js',
        './js/vendor/tabs.js',
      ]
    }
  }
}
