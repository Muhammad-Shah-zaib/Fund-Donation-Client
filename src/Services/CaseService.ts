import { ajax } from "rxjs/ajax";
import { getResolvedCaseCountUrl, getVerifiedCasesUrl } from "../Environment/ServerUrls";
import { CaseResponseListDto } from "../Models/CaseResponseDto";

export default class CaseService
{
    // to get the resolved case count
    public GetResolvedCaseCount$()
    {
        return ajax.getJSON<number>(getResolvedCaseCountUrl)
            .pipe();
    }

    public GetAllVerifieddCases$(){
        return ajax.getJSON<CaseResponseListDto>(getVerifiedCasesUrl)
    }
}