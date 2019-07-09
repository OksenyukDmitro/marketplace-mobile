import React, { Component } from 'react';
import { SplashScreen } from 'expo';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { globalStyles } from './src/styles';
import Navigator from './src/navigation';
import { appOperations } from './src/modules/app';
import { store, createPersist } from './src/store/store';

class App extends Component {
  constructor(props) {
    super(props);
    SplashScreen.preventAutoHide();
  }

  async componentDidMount() {
    await createPersist(store);
    store.dispatch(appOperations.init());
    SplashScreen.hide();
  }


  render() {
    return (
      <View style={globalStyles.fillAll}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </View>
    );
  }
}

export default App;
