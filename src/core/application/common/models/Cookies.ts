export default class Cookie {
    public logged_in: boolean = false;
    public access_token: string = "";
    public refresh_token: string = "";

    constructor(logged_in: boolean, access_token: string, refresh_token: string) {
        this.logged_in = logged_in;
        this.access_token = access_token;
        this.refresh_token = refresh_token;
    }
}
