const StringHelper = require('./StringHelper');

class OperatorsHelper {
  static random(numOperators) {
    const operators = [];
    for (let index = 0; index < numOperators; index++) {
      operators.push(
        index + '_' + StringHelper.random(8, 32)
      );
    }

    return operators;
  }
}

module.exports = OperatorsHelper;