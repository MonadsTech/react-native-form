import React from 'react';
import {View} from 'react-native';
import {Form, FormItem, InputText, FormAction, FORM_ACTIONS} from 'rn-form';
import {ContentText} from '../../common/components/type/ContentText';
import {InputText as InputTextBasic} from '../../common/components/input/InputText';
import {Button} from '../../common/components/Button';

const rules = [
  {required: true, message: 'is required!'},
  {
    pattern: /^\d{1,10}$/,
    message: 'idk!',
  },
];

function FormExample() {
  const form = React.useRef();

  const checkUserNameOne = React.useCallback((value, callback) => {
    setTimeout(() => {
      if (value === '15188888888') {
        callback('some');
      } else {
        callback();
      }
    }, 2000);
  }, []);

  return (
    <View>
      <Form
        name="First form"
        ref={form}
        onFinish={values => {
          console.log('Finish:', values);
        }}>
        <FormItem
          name="username"
          label="Username 1"
          options={{
            rules: rules,
          }}
        />
        <FormItem
          name="username2"
          label="Username 2"
          options={{
            validateFirst: true,
            rules: rules,
          }}>
          <InputText placeholder="Some Placeholder" />
        </FormItem>
        <FormItem
          name="username3"
          label="Username 3"
          options={{
            // initialValue: 'My name',
            // validateFirst: true,
            rules,
          }}
          showError={false}
          showLabel={false}>
          <InputTextBasic label="Username 3" />
        </FormItem>
        <FormAction title="Submit" />
        <FormAction title="RESET" action={FORM_ACTIONS.RESET} />
        <FormAction title="VALIDATE" action={FORM_ACTIONS.VALIDATE}>
          <Button buttonText={'Validate'} />
        </FormAction>
      </Form>
    </View>
  );
}

export {FormExample};
