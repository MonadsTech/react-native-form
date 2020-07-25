/// <reference types="react" />
export declare type InternalFieldNamePath = (string | number)[];
export declare type FieldNamePath = string | number | InternalFieldNamePath;
export declare type FieldValue = never;
export interface Field {
    [name: string]: FieldValue;
}
export interface FieldMeta {
    touched: boolean;
    validating: boolean;
    errors: string[];
    name: InternalFieldNamePath;
}
export interface InternalFieldData extends FieldMeta {
    value: FieldValue;
}
/**
 * Used by `setFields` config
 */
export interface FieldData extends Partial<Omit<InternalFieldData, 'name'>> {
    name: FieldNamePath;
}
export declare type RuleType = 'string' | 'number' | 'boolean' | 'method' | 'regexp' | 'integer' | 'float' | 'object' | 'enum' | 'date' | 'url' | 'hex' | 'email';
declare type Validator = (rule: RuleObject, value: FieldValue, callback: (error?: string) => void) => Promise<void> | void;
export declare type RuleRender = (form: FormInstance) => RuleObject;
interface BaseRule {
    enum?: FieldValue[];
    len?: number;
    max?: number;
    message?: string | React.ReactElement;
    min?: number;
    pattern?: RegExp;
    required?: boolean;
    transform?: (value: FieldValue) => FieldValue;
    type?: RuleType;
    validator?: Validator;
    whitespace?: boolean;
    /** Customize rule level `validateTrigger`. Must be subset of Field `validateTrigger` */
    validateTrigger?: string | string[];
}
interface ArrayRule extends Omit<BaseRule, 'type'> {
    type: 'array';
    defaultField?: RuleObject;
}
export declare type RuleObject = BaseRule | ArrayRule;
export declare type Rule = RuleObject | RuleRender;
export interface ValidateErrorEntity {
    values: Field;
    errorFields: {
        name: InternalFieldNamePath;
        errors: string[];
    }[];
    outOfDate: boolean;
}
export interface FieldEntity {
    onFieldChange?: (field: Field, namePathList: InternalFieldNamePath[] | null) => void;
    isFieldTouched?: () => boolean;
    isFieldDirty?: () => boolean;
    isFieldValidating?: () => boolean;
    getMeta?: () => FieldMeta;
    getNamePath?: () => InternalFieldNamePath;
    getErrors?: () => string[];
    props: {
        name?: FieldNamePath;
        dependencies?: FieldNamePath[];
        initialValue?: unknown;
    };
}
export interface FieldError {
    name: InternalFieldNamePath;
    errors: string[];
}
export declare type ValidateFields = (error?: any, value?: any) => Promise<Field>;
export interface FormInstance {
    getFieldDecorator: (name: FieldNamePath, options: FormItemOptions) => (_baseChild: React.ReactNode) => React.ReactNode;
    getFieldValue: (name: FieldNamePath) => FieldValue;
    getFieldsValue: (nameList?: FieldNamePath[] | true, filterFunc?: (meta: FieldMeta) => boolean) => Field;
    getFieldError: (name: FieldNamePath) => string[];
    getFieldsError: (nameList?: FieldNamePath[]) => FieldError[];
    isFieldsTouched(nameList?: FieldNamePath[], allFieldsTouched?: boolean): boolean;
    isFieldsTouched(allFieldsTouched?: boolean): boolean;
    isFieldTouched: (name: FieldNamePath) => boolean;
    isFieldValidating: (name: FieldNamePath) => boolean;
    isFieldsValidating: (nameList: FieldNamePath[]) => boolean;
    resetFields: (fields?: FieldNamePath[]) => void;
    setFields?: (fields: FieldData[]) => void;
    setFieldsValue?: (value: Field) => void;
    validateFields: ValidateFields;
    submit?: () => void;
}
export interface Callbacks {
    onValuesChange?: (changedValues: Field, values: Field) => void;
    onFieldsChange?: (changedFields: FieldData[], allFields: FieldData[]) => void;
    onFinish: (values: Field[]) => void;
    onFinishFailed?: (errorInfo: ValidateErrorEntity) => void;
}
export interface FormItemOptions {
    initialValue?: unknown;
    rules?: unknown;
    validateFirst?: boolean;
}
export {};
