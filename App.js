import React from 'react';

import {AppRegistry} from 'react-native';

import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';

import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/Home';
import {Details} from './src/Details';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  // uri: 'https://studio.apollographql.com/public/star-wars-swapi/explorer?variant=current',
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer initialRouteName="Home">
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};
AppRegistry.registerComponent('MyApplication', () => App);

export default App;
