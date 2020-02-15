"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _card = _interopRequireDefault(require("./card"));

require("./sass/card-slide.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Cria um slide a partir do CardSlideItem
 * @todo deve ser passado um prop array de items onde contém cada CardSlideItem que será renderizado
 * @todo para cada item do prop array, deve ser definido os valores do props do CardSlideItem
 * @example items: [{
        cardName: 'Solicitações',
        cardDescription: 'Pendentes',
        cardTotal: 78,
        cardData: []
      }]
 */
var CardSlide =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardSlide, _React$Component);

  function CardSlide(props) {
    var _this;

    _classCallCheck(this, CardSlide);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CardSlide).call(this, props));
    _this.state = {
      items: [],
      cardSelected: 1,
      slideAnimation: 'slide-left'
    };
    _this.renderStateProps = _this.renderStateProps.bind(_assertThisInitialized(_this));
    _this.chooseCardSlideItem = _this.chooseCardSlideItem.bind(_assertThisInitialized(_this));
    _this.nextItem = _this.nextItem.bind(_assertThisInitialized(_this));
    _this.prevItem = _this.prevItem.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Registra os dados que vierem do props caso existam no state
   */


  _createClass(CardSlide, [{
    key: "renderStateProps",
    value: function renderStateProps() {
      try {
        var state = Object.assign({}, this.state);

        for (var key in this.props) {
          if (state.hasOwnProperty(key)) {
            state[key] = this.props[key];
          }
        }

        this.setState(state);
      } catch (error) {
        return;
      }
    }
    /**
     * Seleciona um slide ao clicar em um dot [bolinha(s) que aparece abaixo do slide]
     */

  }, {
    key: "chooseCardSlideItem",
    value: function chooseCardSlideItem(slideItem) {
      try {
        this.setState({
          cardSelected: slideItem + 1,
          slideAnimation: slideItem + 1 < this.state.cardSelected ? 'slide-right' : 'slide-left'
        });
      } catch (error) {
        return;
      }
    }
    /**
     * Retorna para o item anterior do slide
     */

  }, {
    key: "prevItem",
    value: function prevItem() {
      if (this.state.cardSelected === 1) return false;

      try {
        this.setState({
          cardSelected: this.state.cardSelected - 1,
          slideAnimation: 'slide-right'
        });
      } catch (error) {
        return;
      }
    }
    /**
     * Avança para o próximo item do slide
     */

  }, {
    key: "nextItem",
    value: function nextItem() {
      if (this.state.cardSelected === this.state.items.length) return false;

      try {
        this.setState({
          cardSelected: this.state.cardSelected + 1,
          slideAnimation: 'slide-left'
        });
      } catch (error) {
        return;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderStateProps();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      try {
        var _this$state = this.state,
            items = _this$state.items,
            cardSelected = _this$state.cardSelected,
            slideAnimation = _this$state.slideAnimation;
        return _react.default.createElement("div", {
          className: "card-slide"
        }, _react.default.createElement("div", {
          className: "card-slide-container"
        }, items.map(function (item, key) {
          if (key === cardSelected - 1) {
            item.isSelected = true;
            item.slideAnimation = slideAnimation;
          } else {
            item.isSelected = false;
          }

          item.itemKey = key;
          return _react.default.createElement(_card.default, _extends({
            key: key
          }, item));
        }), items.length > 1 && cardSelected > 1 && _react.default.createElement("a", {
          className: "prev",
          onClick: this.prevItem
        }, "\u276E"), items.length > cardSelected && _react.default.createElement("a", {
          className: "next",
          onClick: this.nextItem
        }, "\u276F")), _react.default.createElement("div", {
          className: "card-dot"
        }, items.length > 1 && items.map(function (item, key) {
          return _react.default.createElement("span", {
            className: "dot ".concat(cardSelected - 1 === key && 'active'),
            key: key,
            onClick: function onClick() {
              return _this2.chooseCardSlideItem(key);
            }
          });
        })));
      } catch (error) {
        return _react.default.createElement("div", null, error.message);
      }
    }
  }]);

  return CardSlide;
}(_react.default.Component);

var _default = CardSlide;
exports.default = _default;