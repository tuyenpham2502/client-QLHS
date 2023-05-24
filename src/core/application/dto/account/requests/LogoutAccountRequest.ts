export class LogoutAccountRequest {
    isLogoutAllDevice: Boolean = false;
    constructor(
        isLogoutAllDevice: Boolean,
    ) {
        this.isLogoutAllDevice = isLogoutAllDevice;
    }
}
