import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

const STORYBOOK_START = true

const App = () => {
  return(
    <>
      <Text>Teste</Text>
    </>
  );
}

export default STORYBOOK_START ? require('./storybook').default : App