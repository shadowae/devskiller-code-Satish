import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  currentlyEdited: null,
  items: [],
};

export const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    addComponent: (state, action) => ({
      items: [...state.items, {...action.payload, values: {}}],
      currentlyEdited: {...action.payload, values: {}}
    }),
    updateComponent: (state, action) => {
      const componentToUpdate = state.items.find(component => component.id === action.payload.id);
      if (componentToUpdate) {
        componentToUpdate.values = action.payload.data.values;
      }
      state.currentlyEdited = null;
    },
    removeComponent: (state, action) => ({
      currentlyEdited: null,
      items: state.items.filter(component => component.id !== action.payload.id)
    }),
    setEditedComponent: (state, action) => ({
      ...state,
      currentlyEdited: action.payload.component
    }),
  },
})

export const componentsActions = componentsSlice.actions
export const componentsReducer = componentsSlice.reducer
