module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      [
        'module-resolver',
        {
          root: ['./src/'],
          alias: {
            '@': './src',
            test: './test',
            underscore: 'lodash',
          },
        },
      ],
      // 'react-native-reanimated/plugin',
    ],
  };
};