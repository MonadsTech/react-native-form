# react-native-form

A Declarative Form Library for React Native.

## Features

- Declarative
- Easy Error Handling
- Simple & Intuitive API
- Independent form Input Components

## Install

```base
yarn add @monadstech/react-native-form
```

```base
npm install @monadstech/react-native-form
```

# Usage

```jsx
import React from 'react';
import {Form, FormItem, FormAction} from '@monadstech/react-native-form';

const FormView = (props) => {
  const formRef = React.useRef();

  return (
    <Form
      name="FormName"
      ref={(form) => (formRef.current = form)}
      onFinish={(values) => {
        console.log('values', values);
      }}
      onFinishFailed={(errors) => {
        console.log('errors', errors);
      }}>
      <FormItem
        name="input1"
        label="Name"
        options={{
          initialValue: 'First Name',
          rules: [
            {
              required: true,
              message: 'Please enter your name!',
            },
          ],
        }}>
        {/* Your Input Component Here, which accepts value and onChange props */}
      </FormItem>
      <FormAction title="Login" />
    </Form>
  );
};
```
