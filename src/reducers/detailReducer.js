const initState = {
  detail: {},
  screenshot: {},
  isLoading:true
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload.detail,
        screenshot: action.payload.screenshots,
        isLoading:false
      };
    case "LOAD_GAME":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default detailReducer;
