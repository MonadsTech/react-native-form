import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { FormInstance } from './interface';
declare const FORM_ACTIONS: {
    SUBMIT: string;
    RESET: string;
    VALIDATE: string;
};
interface DefaultButtonProps {
    title: string;
    onPress(): void;
}
export interface ButtonNewProps extends DefaultButtonProps {
    fieldsValue?: unknown;
    form?: FormInstance;
}
export interface FormActionProps {
    action: string | undefined;
    children: React.ReactNode;
    title: string;
    style?: StyleProp<ViewStyle>;
    onFormUpdate(form: FormInstance | undefined): void;
}
declare const FormAction: React.ForwardRefExoticComponent<FormActionProps & React.RefAttributes<unknown>>;
export { FormAction, FORM_ACTIONS };
