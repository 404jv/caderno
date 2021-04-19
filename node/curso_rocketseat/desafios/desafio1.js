function getFlag(string) {
  const index = process.argv.indexOf(string);

  return process.argv[index +1];
}

module.exports = getFlag;
