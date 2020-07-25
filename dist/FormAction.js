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
exports.FORM_ACTIONS = exports.FormAction = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const context_1 = require("./context");
const warning_1 = require("rc-util/lib/warning");
const FORM_ACTIONS = {
    SUBMIT: 'SUBMIT',
    RESET: 'RESET',
    VALIDATE: 'VALIDATE',
};
exports.FORM_ACTIONS = FORM_ACTIONS;
// eslint-disable-next-line @typescript-eslint/no-empty-function
const DefaultButtonChild = react_1.default.forwardRef((props, ref) => react_1.default.createElement(react_native_1.Button, Object.assign({}, props, { ref: ref })));
const FormAction = react_1.default.forwardRef((_props, ref) => {
    const { action = FORM_ACTIONS.SUBMIT, title = 'Submit', style, children, onFormUpdate } = _props, props = __rest(_props, ["action", "title", "style", "children", "onFormUpdate"]);
    // const {rules, initialValue = '', validateFirst = false} = options;
    const { form, onFinish, onFinishFailed } = react_1.default.useContext(context_1.FormContext);
    if (!form) {
        throw new Error('FormAction must be wrapped inside Form component');
    }
    // console.log('FormAction -> form', form);
    react_1.default.useEffect(() => {
        if (onFormUpdate) {
            onFormUpdate(form);
        }
    }, [form, onFormUpdate]);
    const onActionPress = react_1.default.useCallback(() => {
        if (action === FORM_ACTIONS.SUBMIT) {
            form.validateFields((error, value) => {
                if (!error) {
                    onFinish(value);
                }
                else if (onFinishFailed) {
                    onFinishFailed(error);
                }
            });
        }
        if (action === FORM_ACTIONS.VALIDATE) {
            form.validateFields();
        }
        if (action === FORM_ACTIONS.RESET) {
            form.resetFields();
        }
    }, [action, form, onFinish, onFinishFailed]);
    const _baseChildOriginal = react_1.default.useMemo(() => {
        if (react_1.default.Children.count(children) > 1) {
            warning_1.warning(false, 'FormAction accepts only one child');
        }
        const _firstChild = children ? react_1.default.Children.only(children) : (
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        react_1.default.createElement(DefaultButtonChild, { title: "Submit", onPress: () => { } }));
        return _firstChild;
    }, [children]);
    const baseChild = react_1.default.useMemo(() => {
        const newProps = Object.assign({ onPress: onActionPress, title }, props);
        if (_baseChildOriginal.props.form) {
            newProps.form = form;
        }
        if (_baseChildOriginal.props.fieldsValue) {
            newProps.fieldsValue = form.getFieldsValue();
        }
        return react_1.default.cloneElement(_baseChildOriginal, newProps);
    }, [_baseChildOriginal, form, onActionPress, props, title]);
    return react_1.default.createElement(react_native_1.View, { style: style }, baseChild);
});
exports.FormAction = FormAction;
