import * as React from 'react';
import warning from 'rc-util/lib/warning';
import {
  FormInstance,
  InternalFieldNamePath,
  Callbacks,
  // InternalFormInstance,
} from './interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const warningFunc: any = () => {
  warning(
    false,
    'Can not find FormContext. Please make sure you wrap Field under Form.',
  );
};

/**
 * Form Context
 * Set top form style and pass to Form Item usage.
 */
export interface FormContextProps extends Callbacks {
  name?: string;
  vertical?: boolean;
  preserve?: boolean;
  // labelAlign?: FormLabelAlign;
  // itemRef: (name?: (string | number)[]) => (node: React.ReactElement) => void;

  form?: FormInstance;
}

export const FormContext = React.createContext<FormContextProps>({
  // labelAlign: 'right',
  vertical: true,
  // itemRef: (() => {}) as never,
  onFinish: () => warning(false, 'Pass onFinishHandler to Form'),
});

export const FormItemContext = React.createContext({
  // updateItemErrors: () => {},
});
