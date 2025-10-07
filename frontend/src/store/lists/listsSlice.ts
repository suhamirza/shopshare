// frontend/src/store/lists/listsSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { List, ListItem } from '../../types'; // <--- UPDATED: Import List and ListItem from shared types

// Define the lists state interface
interface ListsState {
  // <--- UPDATED: Use the imported List interface for the lists array
  lists: List[];
  isLoading: boolean;
}

// Define the initial state
const initialState: ListsState = {
  lists: [],
  isLoading: false,
};

// Create the lists slice
const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    // Placeholder reducer to set loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    // Additional placeholder reducer to set lists
    // <--- UPDATED: Use the imported List interface for the payload
    setLists: (state, action: PayloadAction<List[]>) => {
      state.lists = action.payload;
    },
    // Additional placeholder reducer to add a list
    // <--- UPDATED: Use the imported List interface for the payload
    addList: (state, action: PayloadAction<List>) => {
      state.lists.push(action.payload);
    },
    // You could also add a reducer for adding/updating items within a specific list
    // For example:
    // updateListItem: (state, action: PayloadAction<{ listId: string; item: ListItem }>) => {
    //   const listIndex = state.lists.findIndex(list => list.id === action.payload.listId);
    //   if (listIndex !== -1) {
    //     const itemIndex = state.lists[listIndex].items?.findIndex(item => item.id === action.payload.item.id);
    //     if (itemIndex !== -1 && state.lists[listIndex].items) {
    //       state.lists[listIndex].items[itemIndex] = action.payload.item;
    //     }
    //   }
    // },
  },
});

// Export actions
export const { setLoading, setLists, addList } = listsSlice.actions;

// Export reducer
export default listsSlice.reducer;