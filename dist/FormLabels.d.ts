import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
interface LabelProps {
    label: string;
    labelStyle?: StyleProp<ViewStyle>;
}
declare type errorObject = string[] | any;
interface ErrorProps {
    error: errorObject;
    errorStyle?: StyleProp<ViewStyle>;
}
declare const FormLabel: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<unknown>>;
declare const FormErrorLabel: React.ForwardRefExoticComponent<ErrorProps & React.RefAttributes<unknown>>;
export { FormLabel, FormErrorLabel };
