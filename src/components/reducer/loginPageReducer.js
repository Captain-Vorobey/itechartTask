const {type} = require('../actions/constants');

const loginReducer = (state, action) => {
  switch (action.type) {
    case type.LOGIN:
      return { account: action.account, isAuthorizated: true };

    case type.LOGOUT:
      return { account: "", isAuthorizated: false };

    case type.TOGGLE_TOOLBAR_EL:
        return { toolbarItems: state.toolbarItems.map(el => {
            if(el.id == action.id) {
                el.isActive = true;
            }
                else {
                    el.isActive = false;
                }
            return el;
        }) }

    default:
      return state;
  }
}

export default loginReducer;