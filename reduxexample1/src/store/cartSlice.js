const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

// const initialState = [];


const cartSlice = createSlice({
   name : 'cart',
   initialState : {
    items : [],
    totalQuantity : 0,
    totalAmount : 0
  },
    reducers : {
        add (state,action)  {
        //  state.push(action.payload)
        const newItem = action.payload;
        const existingItem = state.items.find((item) => item.id === newItem.id);
        state.totalQuantity++;
        state.changed = true;
        console.log(existingItem,"existingitem");
        console.log(newItem,"newitem")
        //if it's a new item
        if (!existingItem) {
          state.items.push({
            id: newItem.id,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price, // newItem.price * quantity
            name: newItem.title,
            image : newItem.image
            // totalAmount : newItem.price
          });
          state.totalAmount = state.totalAmount + newItem.price;
        } else {
          existingItem.quantity++;
          existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
          state.totalAmount = state.totalAmount + existingItem.price;
        }
        },
        remove (state,action) {
          // return state.filter((item) => item.id !== action.payload)
          const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      console.log(existingItem,"existingitem")
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      }
      existingItem.quantity--;
      existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      state.totalAmount = state.totalAmount - existingItem.price;
    },
    },

})

export const {add , remove}  = cartSlice.actions;
export default cartSlice.reducer;


