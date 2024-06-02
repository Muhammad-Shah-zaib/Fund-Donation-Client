import { ajax } from "rxjs/ajax";
import { getResolvedCaseCountUrl } from "../Environment/ServerUrls";

export default class CaseService
{
    // to get the resolved case count
    public GetResolvedCaseCount$()
    {
        return ajax.getJSON<number>(getResolvedCaseCountUrl)
            .pipe();
    }
}