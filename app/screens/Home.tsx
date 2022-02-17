import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {isError, useQuery} from 'react-query';
import {Loader} from '../components/Loader';

export function Home() {
  const {isLoading, error, data, isFetching, status} = useQuery(
    'repoData',
    () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
        res => res.json(),
      ),
  );

  if (isLoading || isFetching) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Loader />
      </View>
    );
  }

  if (status === 'error') {
    if (isError(error)) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{error.message}</Text>
        </View>
      );
    } else {
      console.log('unknown error', error);
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 32,
      }}>
      {data && (
        <View testID="homeDataView">
          <View style={{marginBottom: 52}}>
            {data.name && (
              <Text style={{fontSize: 36, fontWeight: '600', marginBottom: 16}}>
                {data.name}
              </Text>
            )}
            {data.description && (
              <Text style={{fontSize: 18}}>{data.description}</Text>
            )}
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {data.subscribers_count && <Text>👀 {data.subscribers_count}</Text>}
            {data.stargazers_count && <Text>✨ {data.stargazers_count}</Text>}
            {data.forks_count && <Text>✨ {data.forks_count}</Text>}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
