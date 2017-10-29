export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USERDATA_CHANGE':
      return {
        ...state,
        ...action.userData
      };
    case 'LOGIN':
      return {
        ...state,
        ...action.userData
      };
    case 'LOGOUT':
      return {};
    case 'EDITOR_MODE':
      return {
        ...state,
        editorMode: !state.editorMode
      };
    default:
      return state;
  }
};
