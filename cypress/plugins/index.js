/* eslint-disable no-unused-vars, no-undef */
module.exports = (on) => {
  on('file:preprocessor', (file) => Promise.resolve(file.filePath))
  /* "cypress run" (default to electron) throws this error: Uncaught ReferenceError: require is not defined
  it works resolving file.outputPath, but it's not good enough for staged containers that doesn't have the outputPath
  at the time */
}
/* eslint-enable no-unused-vars */
