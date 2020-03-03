import constants from '../constants/constants';

const loginReducer = (state = [], action) => {
    switch(action.type) {
        case constants.LOG_IN:
            return {...state.users, isAuthorizated: true};

            case constants.LOG_OUT:
                return { ...state.users, isAuthorizated: false };

            default:
                return state;
    }
};

export default loginReducer;