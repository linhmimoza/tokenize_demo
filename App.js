import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import NavigationService from 'services/NavigationService';
import { Provider } from 'react-redux';
import { Store, PersisStore, } from 'store';
import BottomSheet from 'components/BottomSheet';
import { PersistGate } from 'redux-persist/integration/react';
import DialogComponent from 'components/Dialog';
import RootNavigation from 'navigation';
import { LoadingSpinner } from 'components/LoadingSpinner';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import GlobalSnackbar from 'components/GlobalSnackbar';
import { Provider as PaperProvider } from 'react-native-paper';

function App() {
  useEffect(() => {
    requestAnimationFrame(() => {
      SplashScreen.hide();
    });
    return () => {

    };
  });
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <PersistGate persistor={PersisStore}>
          <PaperProvider>
            <LoadingSpinner ref={ref => (NavigationService.loading = ref)} />
            <GlobalSnackbar ref={ref => (NavigationService.snackbar = ref)} />
            <DialogComponent />
            <StatusBar
              translucent
              backgroundColor='transparent'
              barStyle='dark-content'
            />
            <RootNavigation />
            <BottomSheet ref={ref => (NavigationService.bottomSheet = ref)} />
          </PaperProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;