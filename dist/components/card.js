"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./sass/card-slide-item.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Card de exibição básica
 * @todo Contém um título (o assunto do card)
 * @todo Contém um ícone que é exibido ao lado esquerdo do título
 * @todo Contém uma descrição básica sobre o assunto
 * @todo Exibe um valor sobre o card
 * @todo Pode exibir um gráfico
 * @todo Pode exibir um dado de rodapé
 * @todo Pode exibir uma imagem no corpo do card
*/
var CardSlideItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardSlideItem, _React$Component);

  function CardSlideItem(props) {
    var _this;

    _classCallCheck(this, CardSlideItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CardSlideItem).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "updateRenderStateProps", function (prevProps) {
      if (_this.state.rendered === false) return false;

      try {
        if (prevProps !== _this.props) {
          var state = Object.assign({}, _this.state);

          for (var key in _this.state) {
            if (_this.props.hasOwnProperty(key) && _this.props[key] !== prevProps[key]) {
              state[key] = _this.props[key];
            }
          }

          _this.setState(state);
        } else {
          return false;
        }
      } catch (error) {
        return false;
      }
    });

    _this.state = {
      cardHeaderIcon: require('./images/graph.png'),
      cardName: 'Nome do card',
      cardDescription: 'Descrição do card',
      cardTotal: 0,
      cardData: [],
      cardGraphLineColor: '#30B1FF',
      cardGraphBgColor: '#D6EFFF',
      rendered: false,
      isSelected: true,
      slideAnimation: '',
      showBodyImage: false,
      showBodyText: true,
      bodyImage: null
    };
    _this.renderStateProps = _this.renderStateProps.bind(_assertThisInitialized(_this));
    _this.updateRenderStateProps = _this.updateRenderStateProps.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Registra os dados que vierem do props caso existam no state
   */


  _createClass(CardSlideItem, [{
    key: "renderStateProps",
    value: function () {
      var _renderStateProps = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var state, key;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                state = Object.assign({}, this.state);

                for (key in this.props) {
                  if (state.hasOwnProperty(key)) {
                    state[key] = this.props[key];
                  }
                }

                state.rendered = true;
                this.setState(state);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return");

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function renderStateProps() {
        return _renderStateProps.apply(this, arguments);
      }

      return renderStateProps;
    }()
    /**
     * Atualiza os dados que vierem do props caso existam no state
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderStateProps();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.updateRenderStateProps(prevProps);
    }
  }, {
    key: "render",
    value: function render() {
      try {
        var _this$state = this.state,
            cardHeaderIcon = _this$state.cardHeaderIcon,
            cardName = _this$state.cardName,
            cardDescription = _this$state.cardDescription,
            cardTotal = _this$state.cardTotal,
            isSelected = _this$state.isSelected,
            slideAnimation = _this$state.slideAnimation,
            showBodyImage = _this$state.showBodyImage,
            bodyImage = _this$state.bodyImage;
        return _react.default.createElement("div", {
          className: "card-slide-item ".concat(isSelected === true ? 'enabled ' + slideAnimation : 'disabled')
        }, _react.default.createElement("div", {
          className: "card"
        }, _react.default.createElement("div", {
          className: "card-header"
        }, _react.default.createElement("div", {
          className: "card-header-icon"
        }, _react.default.createElement("img", {
          className: "icon-card",
          src: cardHeaderIcon,
          alt: cardName
        })), _react.default.createElement("div", {
          className: "card-header-title"
        }, cardName)), _react.default.createElement("div", {
          className: "card-body"
        }, _react.default.createElement("div", {
          className: "card-body-description"
        }, cardDescription), _react.default.createElement("div", {
          className: "card-body-total"
        }, cardTotal), showBodyImage === true && _react.default.createElement("img", {
          className: "img-fluid",
          src: bodyImage,
          alt: cardDescription
        }), _react.default.createElement("div", {
          className: "card-body-graph"
        })), _react.default.createElement("div", {
          className: "card-footer"
        })));
      } catch (error) {
        return _react.default.createElement("div", {
          className: "card-slide"
        }, _react.default.createElement("div", {
          className: "card"
        }, _react.default.createElement("div", {
          className: "card-header"
        }, _react.default.createElement("div", {
          className: "card-header-title"
        }, "Falha ao renderizar")), _react.default.createElement("div", {
          className: "card-body"
        }, _react.default.createElement("div", {
          className: "card-body-description"
        }, error.message))));
      }
    }
  }]);

  return CardSlideItem;
}(_react.default.Component);

var _default = CardSlideItem;
exports.default = _default;