import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';

const GlobalSnackbar = () => {
  const [visible, setVisible] = useState(false);

  const onToggle = () => setVisible(!visible);

  const onDismiss = () => setVisible(false);

  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      action={{
        label: 'Undo',
        onPress: () => {
          // Do something
        },
      }}>
      {'Hey there! I am a Snackbar'}.
    </Snackbar>
  );
};

export default GlobalSnackbar;