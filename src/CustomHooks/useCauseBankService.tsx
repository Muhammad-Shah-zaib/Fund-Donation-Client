import { CauseResponseListDto } from "../Models/CauseResponseDto";
import CauseBankService from "../Services/CauseBankService"

type TGetAllCauses = (setCauseList: (res: CauseResponseListDto) => void) => void;

interface ICauseBankReturn {
    GetAllCauses: TGetAllCauses;
} 
export default function useCauseBankService(): ICauseBankReturn {
    
    // we need to instantiatet the causebank service here
    const _causeBankService: CauseBankService = new CauseBankService();
    // function to get all the causes
    const GetAllCauses: TGetAllCauses = (setCauseList) => {
        _causeBankService.GetAllCauses$()
            .subscribe(res => {
                setCauseList(res);
            });
    }
    return {GetAllCauses}
}
