import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {GroceryList} from '../GroceryList';

// afterEach(async () => {
//   await queryClient.cancelQueries();
//   await queryClient.clear();
// });

it('renders GroceryList with default elements', () => {
  const {getByTestId} = render(
    <GroceryList
      groceryItem={''}
      items={[]}
      setGroceryItem={jest.fn}
      addNewItemToShoppingList={jest.fn}
    />,
  );

  getByTestId('groceryInput');
  getByTestId('addGroceryItemButton');
});

test('user can input text and click add button for GroceryList', () => {
  const {getByTestId} = render(
    <GroceryList
      groceryItem={''}
      items={[]}
      setGroceryItem={jest.fn}
      addNewItemToShoppingList={jest.fn}
    />,
  );

  const groceryInput = getByTestId('groceryInput');
  const groceryAddButton = getByTestId('addGroceryItemButton');

  fireEvent.changeText(groceryInput, 'chicken');
  fireEvent.press(groceryAddButton);
});
