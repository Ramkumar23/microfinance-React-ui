module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({ test: /\.css$/, include: /node_modules/,  loader:  'style!css' });
    return config;
  }
   exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/group': { page: '/group' }
    }
  }
}
