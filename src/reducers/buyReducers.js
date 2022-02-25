const initialData = {
  orderlist: [],
};

const buyReducers = (state = initialData, action) => {
  switch (action.type) {
    case "BUY_PRODUCT":
      const { buyData } = action.payload;

      const newOrderList = state.orderlist.filter(
        (elem) => elem.id !== action.id
      );

      return {
        ...state,
        orderlist: [
          ...newOrderList,
          {
            buyData: buyData,
          },
        ],
      };

    case "DELETE_PRODUCT":
      const deleteOrder = state.orderlist.filter(
        (elem) => elem.buyData.id !== action.id
      );

      return {
        ...state,
        orderlist: deleteOrder,
      };

    default:
      return state;
  }
};

export default buyReducers;
