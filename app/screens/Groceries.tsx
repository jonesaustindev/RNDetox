import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {isError, useQuery} from 'react-query';

import {GroceryList} from '../components/GroceryList';
import {Loader} from '../components/Loader';

export function Groceries() {
  const [groceryItem, setGroceryItem] = useState('');
  const [items, setItems] = useState<string[]>([]);

  // const {isLoading, error, data, status} = useQuery('repoData', () => {
  //   fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
  //     res => {
  //       return res.json();
  //     },
  //   );
  // });

  // if (isLoading) {
  //   return (
  //     <View style={styles.wrapper}>
  //       <Loader />
  //     </View>
  //   );
  // }

  // if (status === 'error') {
  //   if (isError(error)) {
  //     return (
  //       <View style={styles.wrapper}>
  //         <Text>{error.message}</Text>
  //       </View>
  //     );
  //   } else {
  //     console.log('unknown error', error);
  //   }
  // }

  const addNewItemToShoppingList = () => {
    setItems([groceryItem, ...items]);
    setGroceryItem('');
  };

  return (
    <View style={styles.wrapper}>
      <GroceryList
        groceryItem={groceryItem}
        items={items}
        setGroceryItem={setGroceryItem}
        addNewItemToShoppingList={addNewItemToShoppingList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
