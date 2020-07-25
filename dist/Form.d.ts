import React from 'react';
import { Field, FormInstance, Callbacks } from './interface';
declare type RenderProps = (values: Field, form: FormInstance) => JSX.Element | React.ReactNode;
export interface FormProps extends Callbacks {
    name: string;
    form: FormInstance;
    children?: RenderProps | React.ReactNode;
    vertical?: boolean;
    preserve?: boolean;
    validateTrigger?: string | string[] | false;
}
declare const Form: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
export { Form };
