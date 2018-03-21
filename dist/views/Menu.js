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
import { View, Text } from 'react-native';
// import { Link } from 'react-router-native';
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(props) {
        return _super.call(this, props) || this;
    }
    Menu.prototype.componentDidMount = function () {
    };
    Menu.prototype.render = function () {
        return (React.createElement(View, null,
            React.createElement(View, null),
            React.createElement(Text, null, "Stuff")));
    };
    return Menu;
}(React.Component));
export { Menu };
export default connect()(Menu);
