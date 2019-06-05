module.exports = {
  name: 'widget-confirm-alert',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/widget/confirm-alert',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
