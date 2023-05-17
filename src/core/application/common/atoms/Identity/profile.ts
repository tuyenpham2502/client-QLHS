import {atom} from 'recoil';



export const profileState = atom ({
    key: 'PROFILE_STATE',
    default: {
        data:{}
    }
});
