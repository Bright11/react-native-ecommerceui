module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  //my code
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
  ],
  //the end
};
