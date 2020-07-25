import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { FormItemOptions } from './interface';
export interface FormItemProps {
    children: React.ReactNode;
    name: string;
    label?: string;
    options?: FormItemOptions;
    validateTrigger?: string | string[] | false;
    LabelComponent?: React.ComponentClass;
    ErrorComponent?: React.ComponentClass;
    containerStyle?: StyleProp<ViewStyle>;
}
declare const FormItem: React.ForwardRefExoticComponent<FormItemProps & React.RefAttributes<unknown>>;
export { FormItem };
