module.exports = {
  name: 'bookingapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/bookingapp',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
