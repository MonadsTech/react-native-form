"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormItemContext = exports.FormContext = void 0;
const React = __importStar(require("react"));
const warning_1 = __importDefault(require("rc-util/lib/warning"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const warningFunc = () => {
    warning_1.default(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
};
exports.FormContext = React.createContext({
    // labelAlign: 'right',
    vertical: true,
    // itemRef: (() => {}) as never,
    onFinish: () => warning_1.default(false, 'Pass onFinishHandler to Form'),
});
exports.FormItemContext = React.createContext({
// updateItemErrors: () => {},
});
