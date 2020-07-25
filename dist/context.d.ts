import * as React from 'react';
import { FormInstance, Callbacks } from './interface';
/**
 * Form Context
 * Set top form style and pass to Form Item usage.
 */
export interface FormContextProps extends Callbacks {
    name?: string;
    vertical?: boolean;
    preserve?: boolean;
    form?: FormInstance;
}
export declare const FormContext: React.Context<FormContextProps>;
export declare const FormItemContext: React.Context<{}>;
