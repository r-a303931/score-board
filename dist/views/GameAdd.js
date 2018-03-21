var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { connect } from 'react-redux';
import { View, TextInput } from 'react-native';
import { addGame } from '../actions/games';
var GameAdd = /** @class */ (function (_super) {
    __extends(GameAdd, _super);
    function GameAdd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            name: ''
        };
        return _this;
    }
    GameAdd.prototype.render = function () {
        var _this = this;
        return (React.createElement(View, null,
            React.createElement(TextInput, { style: {}, onChangeText: function (name) { return _this.setState({ name: name }); }, value: this.state.name })));
    };
    return GameAdd;
}(React.Component));
export { GameAdd };
export default connect(null, function (dispatch) {
    return {
        addGame: function (name, type) {
            dispatch(addGame(name, type));
        }
    };
})(GameAdd);
