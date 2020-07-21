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
exports.Form = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const rc_form_1 = require("rc-form");
const context_1 = require("./context");
// const FieldForm: React.ForwardRefRenderFunction<FormInstance, FormProps> = (
const InternalForm = react_1.default.forwardRef((props, ref) => {
    const { name, form, preserve, onValuesChange, onFieldsChange, onFinish, onFinishFailed, children } = props, restProps = __rest(props, ["name", "form", "preserve", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "children"]);
    const formContextValue = react_1.default.useMemo(() => ({
        name,
        form,
        preserve,
        onValuesChange,
        onFieldsChange,
        onFinish,
        onFinishFailed,
    }), [
        form,
        name,
        preserve,
        onFieldsChange,
        onFinish,
        onFinishFailed,
        onValuesChange,
    ]);
    react_1.default.useEffect(() => {
        if (ref) {
            ref(form);
        }
    }, [form]);
    return (react_1.default.createElement(context_1.FormContext.Provider, { value: formContextValue },
        react_1.default.createElement(react_native_1.View, Object.assign({}, restProps), children)));
});
const EnhancedForm = rc_form_1.createForm()(InternalForm);
const Form = react_1.default.forwardRef((props, ref) => {
    return react_1.default.createElement(EnhancedForm, Object.assign({ wrappedComponentRef: ref }, props));
});
exports.Form = Form;
