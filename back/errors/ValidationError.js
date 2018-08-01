// exports.errorName = {
//   MISSING_FIELD: 'MISSING_FIELD'
// };
//
// exports.errorReport = {
//   MISSING_FIELD: {
//     message: 'No name from ValidationError.js',
//     statuscode: 'Empty Name'
//   }
// };

import {
  GraphQLError
} from 'graphql';

class ValidationError extends Error {

  constructor(errors) {
    super('The request is invalid.');
    let result = {
      message: {
        key:[],
        message:[]
      }
    };
    let temp = '';
    this.state = errors.map((error) => {
      result.message.message = result[error.key] = [error.message];
        //result['message'] = {};
    });
    console.log(result);
    return result;

    //return result;
    // return this.state = errors.reduce((result, error) => {
    //   if (Object.prototype.hasOwnProperty.call(result, error.key)) {
    //     result[error.key].push(error.message);
    //   } else {
    //     result[error.key] = [error.message];
    //   }
    //   console.log(result);
    //   return result;
    // }, {});
  }
}

export default ValidationError;
