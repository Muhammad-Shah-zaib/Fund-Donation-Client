import { delay, Observable } from "rxjs";
import { getAllCausesUrl } from "../Environment/ServerUrls";
import { CauseResponseListDto } from "../Models/CauseResponseDto";
import { ajax } from "rxjs/ajax";

export default class CauseBankService{

    public GetAllCauses$(): Observable<CauseResponseListDto> {
        return ajax.getJSON<CauseResponseListDto>(getAllCausesUrl)
            .pipe(delay(200));
    }
}