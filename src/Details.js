import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export const Details = ({navigation, route}) => {
  const {item} = route.params;
  const b = item.speciesConnection.species;
  const a = b.forEach(function (entry) {
    console.log(entry);
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>aaa {JSON.stringify(item.speciesConnection.species)}</Text>
      {/* <Text>aaa {JSON.stringify(item.species.name)}</Text> */}
      {/* <Text>aaa {route.params.item.speciesConnection.species}</Text> */}
    </View>
  );
};
