import {NextPageContext} from "next";
import Cookie from "src/core/application/common/models/Cookies";

export interface ILocalStorageService {
    readStorage(key: string): Cookie;
    setStorage(key: string, storage: Cookie);
}
