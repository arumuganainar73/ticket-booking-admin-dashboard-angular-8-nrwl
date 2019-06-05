module.exports = {
  name: 'product-lists',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/product-lists',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
