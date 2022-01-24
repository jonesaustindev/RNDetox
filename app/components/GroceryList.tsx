import React from 'react';
import {Button, Text, TextInput} from 'react-native';

interface GroceryListProps {
  groceryItem: string;
  items: string[];
  setGroceryItem: React.Dispatch<React.SetStateAction<string>>;
  addNewItemToShoppingList: () => void;
}

export function GroceryList({
  groceryItem,
  items,
  setGroceryItem,
  addNewItemToShoppingList,
}: GroceryListProps) {
  return (
    <>
      <TextInput
        testID="groceryInput"
        value={groceryItem}
        placeholder="Enter grocery item"
        onChangeText={text => setGroceryItem(text)}
      />
      <Button
        testID="addGroceryItemButton"
        title="Add the item to list"
        onPress={addNewItemToShoppingList}
      />
      {items.map(item => (
        <Text key={item}>{item}</Text>
      ))}
    </>
  );
}
