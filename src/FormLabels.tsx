import React from 'react';

import {StyleSheet, Text, StyleProp, ViewStyle} from 'react-native';

interface LabelProps {
  label: string;
  labelStyle?: StyleProp<ViewStyle>;
}

type errorObject = string[] | any;

interface ErrorProps {
  error: errorObject;
  errorStyle?: StyleProp<ViewStyle>;
  showMultiErrors: boolean;
}

const FormLabel = React.forwardRef((_props: LabelProps, ref) => {
  const {label, labelStyle, ...props} = _props;
  return (
    <Text
      style={[
        styles.labelText,
        ...(Array.isArray(labelStyle) ? labelStyle : [labelStyle]),
      ]}>
      {label}
    </Text>
  );
});

const FormErrorLabel = React.forwardRef((_props: ErrorProps, ref) => {
  const {error, errorStyle, showMultiErrors, ...props} = _props;

  if (error) {
    const errors = showMultiErrors ? error : [error[0]];
    return errors.map((info: string) => {
      return (
        <Text
          style={[
            styles.errorInfoText,
            ...(Array.isArray(errorStyle) ? errorStyle : [errorStyle]),
          ]}
          key={info}>
          {info}
        </Text>
      );
    });
  }

  return (
    <Text
      style={[
        styles.errorInfoText,
        ...(Array.isArray(errorStyle) ? errorStyle : [errorStyle]),
      ]}>
      {' '}
    </Text>
  );
});

export {FormLabel, FormErrorLabel};

const styles = StyleSheet.create({
  labelText: {
    color: 'rgba(18,18,18,0.6)',
    fontSize: 12,
    lineHeight: 14
    // marginBottom: 5,
  },
  errorView: {},
  errorInfoText: {
    color: 'red',
    margin: 10,
    textAlign: 'left',
    fontSize: 12,
    lineHeight: 14,
  },
  buttons: {},
});
