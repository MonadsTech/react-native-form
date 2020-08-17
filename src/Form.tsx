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
  form: FormInstance;
  children?: RenderProps | React.ReactNode;
  vertical?: boolean;
  preserve?: boolean;
  validateTrigger?: string | string[] | false;
}

// const FieldForm: React.ForwardRefRenderFunction<FormInstance, FormProps> = (

const InternalForm = React.forwardRef((props: FormProps, ref: any) => {
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

  // console.log('Form render');

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

  React.useEffect(() => {
    if (ref) {
      ref(form);
    }
  }, [form, ref]);

  return (
    <FormContext.Provider value={formContextValue}>
      <View {...restProps}>{children}</View>
    </FormContext.Provider>
  );
});

const EnhancedForm = createForm()(InternalForm);

const Form = React.forwardRef((props, ref) => {
  return <EnhancedForm wrappedComponentRef={ref} {...props} />;
});

export {Form};
