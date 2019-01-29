'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abi = JSON.parse(_CampaignFactory2.default.interface);
var address = '0xB378e3cD938fba312c424B5d4C3DC2f8150041a7';
var instance = new _web2.default.eth.Contract(abi, address);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsImNhbXBhaWduRmFjdG9yeSIsImFiaSIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImFkZHJlc3MiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBNEIsQUFBNUI7Ozs7OztBQUVBLElBQU0sTUFBTSxLQUFLLEFBQUwsTUFBVywwQkFBZ0IsQUFBM0IsQUFBWjtBQUNBLElBQU0sVUFBVSxBQUFoQjtBQUNBLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IsQUFBdEIsS0FBMkIsQUFBM0IsQUFBakIsQUFFQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9CQU5HQklaL1Byb2dyYW1taW5nL2V0aGVyZXVtL3VkZW15LWV0aGVyZXVtLXN0ZXBoZW4vQ3Jvd2RDb2luIn0=