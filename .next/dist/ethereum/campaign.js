'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  var abi = JSON.parse(_Campaign2.default.interface);
  var campaignAddress = address;
  return new _web2.default.eth.Contract(abi, campaignAddress);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImFkZHJlc3MiLCJhYmkiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJjYW1wYWlnbkFkZHJlc3MiLCJldGgiLCJDb250cmFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXFCLEFBQXJCLEFBRUE7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBYSxBQUMxQjtNQUFNLE1BQU0sS0FBSyxBQUFMLE1BQVcsbUJBQVMsQUFBcEIsQUFBWixBQUNBO01BQU0sa0JBQWtCLEFBQXhCLEFBQ0E7U0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IsQUFBdEIsS0FBMkIsQUFBM0IsQUFBUCxBQUNEO0FBSkQiLCJmaWxlIjoiY2FtcGFpZ24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0JBTkdCSVovUHJvZ3JhbW1pbmcvZXRoZXJldW0vdWRlbXktZXRoZXJldW0tc3RlcGhlbi9Dcm93ZENvaW4ifQ==