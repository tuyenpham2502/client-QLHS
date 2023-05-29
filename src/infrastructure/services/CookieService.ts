import cookies from "next-cookies";
import { ICookieService } from "src/core/application/services/ICookieService";
import Cookie from "src/core/application/common/models/Cookies";
import { NextPageContext } from "next";

export default class CookieService implements ICookieService {
    readCookie(context: NextPageContext): Cookie {
        let allCookies = cookies(context);
        if (allCookies) {
            return new Cookie(allCookies.logged_in == "true", allCookies.access_token!, allCookies.refresh_token!)
        }
        return new Cookie(false, "", "");
    }
    setCookie(document: Document, cookie: Cookie) {
        document.cookie = `logged_in=${cookie.logged_in} ;path=/; secure; SameSite=None`;
        document.cookie = `access_token=${cookie.access_token} ;path=/; secure; SameSite=None`;
        document.cookie = `refresh_token=${cookie.refresh_token} ;path=/; secure; SameSite=None`;
    }
}
