const { isEmpty } = require('lodash');
const ERRORS = require('./errors');

module.exports.doesDocumentExist = async (Collection, id) => {
  try {
    const document = await Collection.findById(id);
    if (isEmpty(document)) {
      return false;
    }
    return true;
  } catch (err) {
    return ERRORS.DOCUMENT_NOT_FOUND;
  }
};
