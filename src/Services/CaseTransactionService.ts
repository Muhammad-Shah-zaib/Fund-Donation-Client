import { Observable } from "rxjs";
import { getTotalDonationsUrl } from "../Environment/ServerUrls";
import { ajax } from "rxjs/ajax";

export default class CaseTransactionService {

    // function to get the total donations
    GetTotalDonations$ = (): Observable<number> => {
        return ajax.getJSON<number>(getTotalDonationsUrl)
            .pipe();
    }
}