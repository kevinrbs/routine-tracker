module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            pages: './src/pages/index.ts',
            components: './src/components/index.ts',
            layouts: './src/layouts/index.ts',
            assets: './src/assets/index.ts',
            utils: './src/utils/index.ts',
            styles: './src/styles/index.ts',
          },
        },
      ],
    ],
  };
};
