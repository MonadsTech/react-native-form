import React from 'react';
import {View} from 'react-native';
import {createForm} from 'rc-form';

import {FormContext, FormContextProps} from './context';
import {
  Field,
  FormInstance,
  FieldData,
  InternalFieldNamePath,
  Callbacks,
  // InternalFormInstance,
} from './interface';
// import {useForm} from './useForm';

type RenderProps = (
  values: Field,
  form: FormInstance,
) => JSX.Element | React.ReactNode;

export interface FormProps extends Callbacks {
  name: string;
  form?: FormInstance;
  children?: RenderProps | React.ReactNode;
  vertical?: boolean;
  preserve?: boolean;
  validateTrigger?: string | string[] | false;
}

// const FieldForm: React.ForwardRefRenderFunction<FormInstance, FormProps> = (

const InternalFieldForm: React.ForwardRefRenderFunction<unknown, FormProps> = (
  props: FormProps,
  ref,
) => {
  // const {form, onFinish, containerStyle, children, ...restProps} = _props;

  const {
    name,
    form,
    preserve,
    onValuesChange,
    onFieldsChange,
    onFinish,
    onFinishFailed,
    children,
    ...restProps
  }: FormProps = props;

  const formContextValue: FormContextProps = React.useMemo(
    () => ({
      name,
      form,
      preserve,
      onValuesChange,
      onFieldsChange,
      onFinish,
      onFinishFailed,
    }),
    [
      form,
      name,
      preserve,
      onFieldsChange,
      onFinish,
      onFinishFailed,
      onValuesChange,
    ],
  );

  // const [wrapForm] = useForm(form);
  React.useImperativeHandle(ref, () => form);

  return (
    <FormContext.Provider value={formContextValue}>
      <View {...restProps}>{children}</View>
    </FormContext.Provider>
  );
};

const Form = createForm()(React.forwardRef(InternalFieldForm));

export {Form};
