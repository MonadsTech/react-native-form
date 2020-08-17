import React from 'react';

import {FormContext, FormContextProps} from './context';
import {
  Field,
  FormInstance,
  Callbacks,
  // InternalFormInstance,
} from './interface';

export const useForm = (): FormContextProps => {
  const formContext = React.useContext(FormContext);

  return formContext;
};

// function useForm(form?: FormInstance): [FormInstance] {
//   // const [rcForm] = useRcForm();
//   const itemsRef = React.useRef<Record<string, React.ReactElement>>({});

//   // const wrapForm: FormInstance | undefined = React.useMemo(() => form, [form]);

//   // return [wrapForm];
//   return [form];
// }

// // export {useForm};
// const someFunc = (): unknown => {
//   return null;
// };

// const form = {
//   getFieldDecorator: someFunc,
//   getFieldError: someFunc,
//   getFieldInstance: someFunc,
//   getFieldProps: someFunc,
//   getFieldValue: someFunc,
//   getFieldsError: someFunc,
//   getFieldsValue: someFunc,
//   isFieldTouched: someFunc,
//   isFieldValidating: someFunc,
//   isFieldsTouched: someFunc,
//   isFieldsValidating: someFunc,
//   isSubmitting: someFunc,
//   resetFields: someFunc,
//   setFields: someFunc,
//   setFieldsInitialValue: someFunc,
//   setFieldsValue: someFunc,
//   submit: someFunc,
//   validateFields: someFunc,
// };

// const dummyForm: FormInstance = {
//   getFieldDecorator: someFunc as (
//     name: FieldNamePath,
//     options: FormItemOptions,
//   ) => (_baseChild: React.ReactNode) => React.ReactNode,
//   getFieldError: someFunc,
//   getFieldInstance: someFunc,
//   getFieldProps: someFunc,
//   getFieldValue: someFunc,
//   getFieldsError: someFunc,
//   getFieldsValue: someFunc,
//   isFieldTouched: someFunc,
//   isFieldValidating: someFunc,
//   isFieldsTouched: someFunc,
//   isFieldsValidating: someFunc,
//   isSubmitting: someFunc,
//   resetFields: someFunc,
//   setFields: someFunc,
//   setFieldsInitialValue: someFunc,
//   setFieldsValue: someFunc,
//   submit: someFunc,
//   validateFields: someFunc,
// } as FormInstance;
