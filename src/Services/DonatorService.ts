import { ajax } from "rxjs/ajax";
import { getDonatorsCountUrl } from "../Environment/ServerUrls";

// In the class we will configure all the middlewares and other logic will be implemented in the customHook
export default class DonatorService
{
    // to get the donator count
    public GetDonatorCount$()
    {
        return ajax.getJSON<number>(getDonatorsCountUrl)
            .pipe();
    }
}