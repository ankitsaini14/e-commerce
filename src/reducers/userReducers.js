// const initialData = {
//   userlist: [],
// };
// const userReducers = (state = initialData, action) => {
//   switch (action.type) {
//     case "USER_VALUE":
//       const { userdata } = action.payload;

//       return {
//         ...state,
//         userlist: [
//           ...state.userlist,
//           {
//             userdata: userdata,
//           },
//         ],
//       };
//     case "BUY_PRODUCT":
//       const { buyData, email } = action.payload;
//       let id = -1;
//       const user = state.userlist.forEach((user, i) => {
//         if (user.email === email) {
//           id = i;
//           user.buyData = user.orderlist.filter((elem) => elem.id !== action.id);
//         }
//       })[0];

//       return {
//         ...user,
//       };

//     case "DELETE_PRODUCT":
//       const deleteOrder = state.orderlist.filter(
//         (elem) => elem.buyData.id !== action.id
//       );

//       return {
//         ...state,
//         orderlist: deleteOrder,
//       };

//     default:
//       return state;
//   }
// };
// export default userReducers;
