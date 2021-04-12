import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import SigIn from '../../../src/presentation/modules/Screens/components/SigIn/SigIn';

storiesOf('SigIn', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <SigIn />
  ))