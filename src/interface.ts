export type InternalFieldNamePath = (string | number)[];
export type FieldNamePath = string | number | InternalFieldNamePath;

export type FieldValue = never;
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

export type RuleType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'method'
  | 'regexp'
  | 'integer'
  | 'float'
  | 'object'
  | 'enum'
  | 'date'
  | 'url'
  | 'hex'
  | 'email';

type Validator = (
  rule: RuleObject,
  value: FieldValue,
  callback: (error?: string) => void,
) => Promise<void> | void;

export type RuleRender = (form: FormInstance) => RuleObject;

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

export type RuleObject = BaseRule | ArrayRule;

export type Rule = RuleObject | RuleRender;

export interface ValidateErrorEntity {
  values: Field;
  errorFields: {name: InternalFieldNamePath; errors: string[]}[];
  outOfDate: boolean;
}

export interface FieldEntity {
  onFieldChange?: (
    field: Field,
    namePathList: InternalFieldNamePath[] | null,
    // info: ValuedNotifyInfo,
  ) => void;
  isFieldTouched?: () => boolean;
  isFieldDirty?: () => boolean;
  isFieldValidating?: () => boolean;
  // validateRules: (options?: ValidateOptions) => Promise<string[]>;
  getMeta?: () => FieldMeta;
  getNamePath?: () => InternalFieldNamePath;
  getErrors?: () => string[];
  props: {
    name?: FieldNamePath;
    // rules?: Rule[];
    dependencies?: FieldNamePath[];
    initialValue?: unknown;
  };
}
export type ValidateFields = (error?: any, value?: any) => Promise<Field>;

export interface FormInstance {
  // Origin Form API
  getFieldDecorator: (
    name: FieldNamePath,
    options: FormItemOptions,
  ) => (_baseChild: React.ReactNode) => React.ReactNode;
  // getFieldValue: (name: FieldNamePath) => FieldValue;
  getFieldsValue: (
    nameList?: FieldNamePath[] | true,
    filterFunc?: (meta: FieldMeta) => boolean,
  ) => Field;
  getFieldError: (name: FieldNamePath) => string[];
  // getFieldsError: (nameList?: FieldNamePath[]) => FieldError[];
  // isFieldsTouched(
  //   nameList?: FieldNamePath[],
  //   allFieldsTouched?: boolean,
  // ): boolean;
  // isFieldsTouched(allFieldsTouched?: boolean): boolean;
  // isFieldTouched: (name: FieldNamePath) => boolean;
  // isFieldValidating: (name: FieldNamePath) => boolean;
  // isFieldsValidating: (nameList: FieldNamePath[]) => boolean;
  resetFields: (fields?: FieldNamePath[]) => void;
  setFields?: (fields: FieldData[]) => void;
  setFieldsValue?: (value: Field) => void;
  validateFields: ValidateFields;

  // New API
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
