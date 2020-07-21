"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormErrorLabel = exports.FormLabel = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const FormLabel = react_1.default.forwardRef((_props, ref) => {
    const { label, labelStyle } = _props, props = __rest(_props, ["label", "labelStyle"]);
    return (react_1.default.createElement(react_native_1.Text, { style: [
            styles.labelText,
            ...(Array.isArray(labelStyle) ? labelStyle : [labelStyle]),
        ] }, label));
});
exports.FormLabel = FormLabel;
const FormErrorLabel = react_1.default.forwardRef((_props, ref) => {
    const { error, errorStyle } = _props, props = __rest(_props, ["error", "errorStyle"]);
    if (error) {
        return error.map((info) => {
            return (react_1.default.createElement(react_native_1.Text, { style: [
                    styles.errorInfoText,
                    ...(Array.isArray(errorStyle) ? errorStyle : [errorStyle]),
                ], key: info }, info));
        });
    }
    return (react_1.default.createElement(react_native_1.Text, { style: [
            styles.errorInfoText,
            ...(Array.isArray(errorStyle) ? errorStyle : [errorStyle]),
        ] }, ' '));
});
exports.FormErrorLabel = FormErrorLabel;
const styles = react_native_1.StyleSheet.create({
    labelText: {
        color: 'rgba(18,18,18,0.6)',
        fontSize: 12,
        lineHeight: 14,
    },
    errorView: {},
    errorInfoText: {
        color: 'red',
        // margin: 10,
        textAlign: 'left',
        fontSize: 12,
        lineHeight: 14,
    },
    buttons: {},
});
