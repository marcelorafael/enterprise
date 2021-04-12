import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Input from '../../../src/presentation/modules/DS/Input/Input';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Input />
  ))