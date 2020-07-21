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
exports.FormItem = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const context_1 = require("./context");
const FormLabels_1 = require("./FormLabels");
const MemoComponent = react_1.default.forwardRef((_props, ref) => {
    const { children } = _props, props = __rest(_props, ["children"]);
    const memoizedChild = react_1.default.cloneElement(children, props);
    return memoizedChild;
});
const MemoInput = react_1.default.memo(MemoComponent, (prev, next) => {
    return prev.value === next.value;
});
const FormItem = react_1.default.forwardRef((props, ref) => {
    const { name, label, options, LabelComponent = FormLabels_1.FormLabel, ErrorComponent = FormLabels_1.FormErrorLabel, containerStyle, children, } = props;
    const { form } = react_1.default.useContext(context_1.FormContext);
    if (!form) {
        throw new Error('FormItem must be wrapped under Form component');
    }
    const error = form.getFieldError(name);
    const _baseChildOriginal = react_1.default.useMemo(() => {
        try {
            return react_1.default.Children.only(children);
        }
        catch (e) {
            throw new Error('FormItem accepts only one child, which accepts value and onChange prop');
        }
    }, [children]);
    function renderChild(_baseChild) {
        return (react_1.default.createElement(MemoInput, null, react_1.default.cloneElement(_baseChild, {
        // error,
        })));
    }
    return (react_1.default.createElement(react_native_1.View, { style: [
            ...(Array.isArray(containerStyle) ? containerStyle : [containerStyle]),
        ] },
        !!label && react_1.default.createElement(LabelComponent, { label: label }),
        form.getFieldDecorator(name, options || {})(renderChild(_baseChildOriginal)),
        react_1.default.createElement(ErrorComponent, { error: error })));
});
exports.FormItem = FormItem;
