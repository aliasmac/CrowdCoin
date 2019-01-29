'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/BANGBIZ/Programming/ethereum/udemy-ethereum-stephen/CrowdCoin/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
  (0, _inherits3.default)(RequestNew, _Component);

  function RequestNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      recipient: '',
      description: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var campaign, _this$state, value, description, recipient, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                _this.setState({ loading: true, errorMessage: '' });

                campaign = (0, _campaign2.default)(_this.props.address);
                _this$state = _this.state, value = _this$state.value, description = _this$state.description, recipient = _this$state.recipient;
                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({
                  from: accounts[0]
                });

              case 10:
                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](4);

                _this.setState({ errorMessage: _context.t0.message });

              case 16:

                _this.setState({
                  loading: false,
                  value: '',
                  recipient: '',
                  description: ''
                });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Back')), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.description,
        onChange: function onChange(e) {
          return _this3.setState({ description: e.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(e) {
          return _this3.setState({ value: e.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.recipient,
        onChange: function onChange(e) {
          return _this3.setState({ recipient: e.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Create!')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                return _context2.abrupt('return', { address: address });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwicmVjaXBpZW50IiwiZGVzY3JpcHRpb24iLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVEsQUFBTSxBQUFPOztBQUM5QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBTSxBQUFhOzs7Ozs7O0ksQUFFckI7Ozs7Ozs7Ozs7Ozs7OztvTkFFSixBO2FBQVEsQUFDQyxBQUNQO2lCQUZNLEFBRUssQUFDWDttQkFITSxBQUdPLEFBQ2I7b0JBSk0sQUFJUSxBQUNkO2VBTE0sQUFLRyxBO0FBTEgsQUFDTixhLEFBY0Y7MkZBQVcsaUJBQUEsQUFBTyxHQUFQO2tFQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtrQkFBQSxBQUFFLEFBRUY7O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBQS9CLEFBQWMsQUFBK0IsQUFFdkM7O0FBTEcsMkJBS1Esd0JBQVMsTUFBQSxBQUFLLE1BTHRCLEFBS1EsQUFBb0I7OEJBQ0csTUFOL0IsQUFNb0MsT0FOcEMsQUFNRixvQkFORSxBQU1GLE9BTkUsQUFNSywwQkFOTCxBQU1LLGFBTkwsQUFNa0Isd0JBTmxCLEFBTWtCO2dDQU5sQjtnQ0FBQTt1QkFTZ0IsY0FBQSxBQUFLLElBVHJCLEFBU2dCLEFBQVM7O21CQUExQjtBQVRDLG9DQUFBO2dDQUFBO2dDQVVELEFBQVMsUUFBVCxBQUFpQixjQUFqQixBQUErQixhQUFhLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixPQUE3RCxBQUE0QyxBQUF3QixVQUFwRSxBQUE4RSxXQUE5RSxBQUF5Rjt3QkFDckYsU0FYSCxBQVVELEFBQThGLEFBQzFGLEFBQVM7QUFEaUYsQUFDaEcsaUJBREU7O21CQUdOOytCQUFBLEFBQU8sMEJBQXdCLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxVQWJuQztnQ0FBQTtBQUFBOzttQkFBQTtnQ0FBQTtnREFlUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQWZ2QixBQWVQLEFBQWMsQUFBb0I7O21CQUdwQzs7c0JBQUEsQUFBSzsyQkFBUyxBQUNILEFBQ1Q7eUJBRlksQUFFTCxBQUNQOzZCQUhZLEFBR0QsQUFDWDsrQkF0Qk8sQUFrQlQsQUFBYyxBQUlDO0FBSkQsQUFDWjs7bUJBbkJPO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBNEJGO21CQUNQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkosQUFDRSxBQUNFLEFBSUYsMEJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTkYsQUFNRSxBQUVBLHFDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFFRTtBQUZGO3lCQUVHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGdDQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSxxQkFBQTtpQkFBSyxPQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsRUFBQSxBQUFFLE9BQXBDLEFBQUssQUFBYyxBQUF3QjtBQUZ2RDs7b0JBQUE7c0JBSkosQUFFRSxBQUVFLEFBTUY7QUFORTtBQUNFLDJCQUtILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLG1DQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSxxQkFBQTtpQkFBSyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sRUFBQSxBQUFFLE9BQTlCLEFBQUssQUFBYyxBQUFrQjtBQUZqRDs7b0JBQUE7c0JBWkosQUFVRSxBQUVFLEFBTUY7QUFORTtBQUNFLDJCQUtILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDhCQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSxxQkFBQTtpQkFBSyxPQUFBLEFBQUssU0FBUyxFQUFFLFdBQVcsRUFBQSxBQUFFLE9BQWxDLEFBQUssQUFBYyxBQUFzQjtBQUZyRDs7b0JBQUE7c0JBcEJKLEFBa0JFLEFBRUUsQUFNRjtBQU5FO0FBQ0UsMkJBS0osQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkExQkYsQUEwQkUsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQztvQkFBQTtzQkFBQTtBQUFBO1NBcENOLEFBQ0UsQUFRRSxBQTJCRSxBQUlQOzs7Ozs2R0E1RTRCLEE7Ozs7O21CQUNwQjtBLDBCQUFXLE0sQUFBTSxNQUFqQixBO2tEQUVBLEVBQUMsUyxBQUFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYmMsQSxBQTBGekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9CQU5HQklaL1Byb2dyYW1taW5nL2V0aGVyZXVtL3VkZW15LWV0aGVyZXVtLXN0ZXBoZW4vQ3Jvd2RDb2luIn0=