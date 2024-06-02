import { ajax } from "rxjs/ajax";
import { getCaseByIdUrl, getResolvedCaseCountUrl, getVerifiedCasesUrl } from "../Environment/ServerUrls";
import { CaseResponseDto, CaseResponseListDto } from "../Models/CaseResponseDto";
import { delay, Observable } from "rxjs";

export default class CaseService
{
    // to get the resolved case count
    public GetResolvedCaseCount$(): Observable<number>{
        return ajax.getJSON<number>(getResolvedCaseCountUrl)
            .pipe();
    }

    public GetAllVerifieddCases$(): Observable<CaseResponseListDto>{
        return ajax.getJSON<CaseResponseListDto>(getVerifiedCasesUrl)
            .pipe();
    }

    public GetCaseById$(id: number): Observable<CaseResponseDto>{
        return ajax.getJSON<CaseResponseDto>(getCaseByIdUrl + id)
            .pipe(delay(100));
    }
}