import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const GET_ALL_PRODUCTS = gql`
  query Query {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;

const Movie = props => {
  return (
    <Card
      elevation={10}
      style={{
        margin: 10,
        height: 150,
        paddingTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Title>{props.a.title}</Title>
      <Title>{props.a.director}</Title>
      <Title>{props.a.releaseDate}</Title>
    </Card>
  );
};

export const Home = ({navigation}) => {
  const {data, loading, error} = useQuery(GET_ALL_PRODUCTS);

  if (loading || error) return null;

  return (
    <View>
      <FlatList
        keyExtractor={item => item.title}
        data={data.allFilms.films}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', {item})}>
            <Movie a={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
