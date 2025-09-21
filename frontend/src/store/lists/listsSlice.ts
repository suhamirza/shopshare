import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the lists state interface
interface ListsState {
  lists: any[]; // Placeholder type - will be replaced with proper List interface later
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
    setLists: (state, action: PayloadAction<any[]>) => {
      state.lists = action.payload;
    },
    // Additional placeholder reducer to add a list
    addList: (state, action: PayloadAction<any>) => {
      state.lists.push(action.payload);
    },
  },
});

// Export actions
export const { setLoading, setLists, addList } = listsSlice.actions;

// Export reducer
export default listsSlice.reducer;
