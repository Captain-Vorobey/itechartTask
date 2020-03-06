import { type } from './constants';

export const login = (account) => ({
    type: type.LOGIN,
    account
  });

  export const toggleToolbarEl = id => ({
      type: type.TOGGLE_TOOLBAR_EL,
      id
  });