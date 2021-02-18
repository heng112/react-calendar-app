import { SCHEDULES_ADD_ITEM,
        SCHEDULES_FETCH_ITEM,
        SCHEDULES_SET_LOADING,
        SCHEDULES_DELETE_ITEM
      } from "./actions";

// import dayjs from "dayjs";//デバッグ用


const init = {
    items: [],
    isLoading: false
  };

// const init = {
//     items: [
//       {
//         id: 1,
//         title: "ショッピング",
//         date: dayjs(),
//         location: "原宿",
//         description: "洋服屋さん巡り"
//       }
//     ],
//     isLoading: false
//   };

  // const schedulesReducer = (state = init, action) => {
  //   const { type, payload } = action;
  
  //   switch (type) {
  //     case SCHEDULES_ADD_ITEM:
  //       return {
  //         ...state,
  //         items: [...state.items, { ...payload, id: state.items.length + 1 }]
  //       };
  //       case SCHEDULES_SET_LOADING:
  //     return {
  //       ...state,
  //       isLoading: true
  //     };
  //   case SCHEDULES_FETCH_ITEM:
  //     return {
  //       ...state,
  //       isLoading: false,
  //       items: payload
  //     };

  //     default:
  //       return state;
  //   }
  // };
  const schedulesReducer = (state = init, action) => {
    const { type, payload } = action;
    switch (type) {
      case SCHEDULES_ADD_ITEM:
        return {
          ...state,
          isLoading: false,
          // items: payload
          items: [...state.items, payload]
        };
      case SCHEDULES_SET_LOADING:
        return {
          ...state,
          isLoading: true
        };
      case SCHEDULES_FETCH_ITEM:
        return {
          ...state,
          isLoading: false,
          items: payload
        };
        case SCHEDULES_DELETE_ITEM:
      return {
        ...state,
        isLoading: false,
        items: payload
      };
      default:
        return state;
    }
  };
  export default schedulesReducer;