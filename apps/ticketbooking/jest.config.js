module.exports = {
  name: 'ticketbooking',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ticketbooking',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
