import { ICookieService } from "src/core/application/services/ICookieService";
import Cookie from "src/core/application/common/models/Cookies";
import { NextPageContext } from "next";
import { ILocalStorageService } from "src/core/application/services/ILocalStorageService";

export default class LocalStorageService implements ILocalStorageService {
    readStorage(key: string): Cookie {
        if (typeof window != "undefined") {
            let storage = localStorage.getItem(key);
            if (storage && storage.length) {
                return new Cookie(
                    JSON.parse(storage).logged_in,
                    JSON.parse(storage).access_token,
                    JSON.parse(storage).refresh_token
                );
            }
        }

        return new Cookie(false, "", "");

    }

    setStorage(key: string, storage: Cookie,) {
        if (storage) {
            localStorage.setItem(key, JSON.stringify(storage));
        }
    }
}
