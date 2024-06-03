import { delay, Observable } from "rxjs";
import { getAllCausesUrl, getCauseByIdUrl } from "../Environment/ServerUrls";
import { CauseResponseDto, CauseResponseListDto } from "../Models/CauseResponseDto";
import { ajax } from "rxjs/ajax";

export default class CauseBankService{

    public GetAllCauses$(): Observable<CauseResponseListDto> {
        return ajax.getJSON<CauseResponseListDto>(getAllCausesUrl)
            .pipe(delay(200));
    }

    public GetCauseById$(id: number): Observable<CauseResponseDto> {
        return ajax.getJSON<CauseResponseDto>(getCauseByIdUrl + id)
            .pipe();
    }
}