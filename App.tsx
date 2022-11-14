// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Home';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { CreateScreen } from './CreateScreen';
import { DebugScreen } from './DebegScreen';
import { Provider } from 'react-redux';

import { configureStoreAsync } from './store';
import { Store } from 'redux';
import { EditScreen } from './EditScreen';
import { ItemScreen } from './ItemScreen';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

const Stack = createNativeStackNavigator();

function App() {
  const [ store, setStore ] = React.useState<Store | undefined>(undefined);

  React.useEffect(() => {
    if(!store)
      configureStoreAsync().then((s) => setStore(s));
  }, []);
  
  if (store){
    return (
      <Provider store={store}>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Create" component={CreateScreen} />
            <Stack.Screen name="Debug" component={DebugScreen} />
            <Stack.Screen name="Edit" component={EditScreen} />
            <Stack.Screen name="Item" component={ItemScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
  return null;
}

export default App;