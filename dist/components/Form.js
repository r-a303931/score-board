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
import { View } from 'react-native';
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        return _super.call(this, props) || this;
    }
    Form.prototype.render = function () {
        return (React.createElement(View, null));
    };
    return Form;
}(React.Component));
export default Form;
