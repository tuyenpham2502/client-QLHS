import { atom } from "recoil";

export const ProfileState = atom({
    key: 'PROFILE_STATE', // unique ID (with respect to other atoms/selectors)
    default: {
        data: []
    }, // default value (aka initial value)
});

export const TenantIdState = atom({
    key: 'TENANTID_STATE', // unique ID (with respect to other atoms/selectors)
    default: {
        data: null
    }, // default value (aka initial value)
});


export const UserLoginIdState = atom({
    key: 'USER_LOGIN_ID_STATE',
    default: {
        data: null
    }
});

export const RoleNameLoginState = atom({
    key: 'ROLE_NAME_LOGIN_STATE',
    default: {
        data: []
    }
});