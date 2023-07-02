import { RequestDocument, Variables } from "graphql-request";
import {RequestResponse} from "src/core/application/dto/common/responses/RequestResponse";
import Cookie from "src/core/application/common/models/Cookies";

export interface IRequestGraphQLService {

    /**
     * Make POST request to the endpoint
     * @param query
     * @param context
     * @param variable
     */
    makePostRequestAsync(query: RequestDocument, context: Cookie, variable?: Variables): Promise<RequestResponse>

}
