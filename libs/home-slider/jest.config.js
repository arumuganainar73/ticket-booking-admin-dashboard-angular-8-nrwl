module.exports = {
  name: 'home-slider',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/home-slider',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
