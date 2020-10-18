import React from 'react';
import {View, ViewStyle, StyleProp} from 'react-native';

import {FormContext} from './context';
import {FormLabel, FormErrorLabel} from './FormLabels';
import {
  Field,
  FormInstance,
  FieldData,
  FormItemOptions,
  // InternalFormInstance,
} from './interface';

interface MemoInputProps {
  value?: unknown;
  children: React.ReactNode;
  shouldUpdate?(a: unknown, b: unknown): boolean;
}

const MemoComponent = React.forwardRef((_props: MemoInputProps, ref) => {
  const {children, ...props} = _props;
  const memoizedChild = React.cloneElement(children as JSX.Element, props);
  return memoizedChild;
});

const MemoInput = React.memo(MemoComponent, (prev, next) => {
  if (next.shouldUpdate) {
    const update = next.shouldUpdate(prev, next);
    if (update) {
      return false;
    }
  }

  return prev.value === next.value;
});

export interface FormItemProps {
  children: React.ReactNode;
  name: string;
  label?: string;
  options?: FormItemOptions;
  validateTrigger?: string | string[] | false;
  LabelComponent?: React.ComponentClass;
  ErrorComponent?: React.ComponentClass;
  containerStyle?: StyleProp<ViewStyle>;
  shouldUpdate?(a: unknown, b: unknown): boolean;
  showMultiErrors: boolean;
}

const FormItem = React.forwardRef((props: FormItemProps, ref) => {
  const {
    name,
    label,
    options,
    LabelComponent = FormLabel,
    ErrorComponent = FormErrorLabel,
    containerStyle,
    children,
    shouldUpdate,
    showMultiErrors,
  } = props;

  const {form} = React.useContext(FormContext);

  if (!form) {
    throw new Error('FormItem must be wrapped under Form component');
  }

  const error: string[] = form.getFieldError(name);

  const _baseChildOriginal: JSX.Element = React.useMemo(() => {
    try {
      return React.Children.only(children) as JSX.Element;
    } catch (e) {
      throw new Error(
        'FormItem accepts only one child, which accepts value and onChange prop',
      );
    }
  }, [children]);

  function renderChild(_baseChild: React.ReactNode): React.ReactNode {
    return _baseChild;
    // return (
    //   <MemoInput shouldUpdate={shouldUpdate}>
    //     {React.cloneElement(_baseChild as JSX.Element, {
    //       // error,
    //     })}
    //   </MemoInput>
    // );
  }

  return (
    <View
      style={[
        ...(Array.isArray(containerStyle) ? containerStyle : [containerStyle]),
      ]}>
      {!!label && <LabelComponent label={label} />}
      {form.getFieldDecorator(
        name,
        options || {},
      )(renderChild(_baseChildOriginal))}
      <ErrorComponent error={error} showMultiErrors={showMultiErrors} />
    </View>
  );
});

export {FormItem};
