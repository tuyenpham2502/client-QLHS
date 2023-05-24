import { atom } from "recoil";

export const Authentication = atom({
    key: 'ACCOUNT_AUTHENTICATION', // unique ID (with respect to other atoms/selectors)
    default: {
        isAuthenticated: false,
        accessToken: '',
        refreshToken: ''
    }, // default value (aka initial value)
});
