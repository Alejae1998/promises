const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

class SimpleDb {
  constructor(dirPath) {
    this.dirPath = dirPath;
  }

  getFileById(id) {
    this.filePath = path.join(this.dirPath, `${id}.json`);
    return fs
      .readFile(this.filePath)
      .then((file) => JSON.parse(file))
      .catch((e) => {
        if (e.code === 'ENOENT') {
          throw new Error(`no such a file:${this.filePath}`);
        }
        throw e;
      });
  }
}

module.exports = SimpleDb;
