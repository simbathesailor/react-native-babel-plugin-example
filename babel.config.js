const nativeDefaultPreset = require('metro-react-native-babel-preset');

function isJSFile(fileName) {
  return !!fileName && fileName.endsWith('.js');
}

module.exports = api => {
  const v = api.env();
  console.log('v ', v);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        '@simbathesailor/babel-plugin-use-what-changed',
        {
          active: true,
        },
      ],
    ],
    // overrides: [
    //   {
    //     test: isJSFile,
    //     plugins: [
    //       [
    //         '@simbathesailor/babel-plugin-use-what-changed',
    //         {
    //           active: true,
    //         },
    //       ],
    //     ],
    //   },
    // ],
    // comments: true,
  };
};
