import { atom } from "recoil"

export const StudentState = atom({
    key: 'STUDENT_STATE', // unique ID (with respect to other atoms/selectors)
    default: {
        data:<any> null
    }, // default value (aka initial value)
});
