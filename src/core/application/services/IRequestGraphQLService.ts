import { RequestDocument, Variables } from "graphql-request";
import {RequestResponse} from "src/core/application/dto/common/responses/RequestResponse";
import Cookie from "../common/models/Cookie";

export interface IRequestGraphQLService {

    /**
     * Make POST request to the endpoint
     * @param query
     * @param context
     * @param variable
     */
    makePostRequestAsync(query: RequestDocument, context: Cookie, variable?: Variables): Promise<RequestResponse>

}
