export const addCart = (data) => {
  return {
    type: "ADD_CART",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteCart = (id) => {
  return {
    type: "DELETE_CART",
    id,
  };
};

export const buyProduct = (id, buyData) => {
  return {
    type: "BUY_PRODUCT",
    id,
    payload: {
      buyData: buyData,
      // email
    },
  };
};

export const deleteProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    id,
  };
};

export const userValue = (userdata) => {
  return {
    type: "USER_VALUE",
    payload: {
      userdata: userdata,
    },
  };
};
