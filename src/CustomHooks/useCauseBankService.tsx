import { useNavigate } from "react-router-dom";
import { CauseResponseDto, CauseResponseListDto } from "../Models/CauseResponseDto";
import CauseBankService from "../Services/CauseBankService"

type TGetAllCauses = (setCauseList: (res: CauseResponseListDto) => void) => void;
type TGetCauseById = (setCause: (res: CauseResponseDto) => void, id: number) => void;

interface ICauseBankReturn {
    GetAllCauses: TGetAllCauses;
    GetCauseById: TGetCauseById;
}
export default function useCauseBankService(): ICauseBankReturn {
    // navigation hooks
    const navigate = useNavigate();

    // we need to instantiatet the causebank service here
    const _causeBankService: CauseBankService = new CauseBankService();
    // function to get all the causes
    const GetAllCauses: TGetAllCauses = (setCauseList) => {
        _causeBankService.GetAllCauses$()
            .subscribe(res => {
                setCauseList(res);
            });
    }

    const GetCauseById: TGetCauseById = (setCause, id) => {
        _causeBankService.GetCauseById$(id)
            .subscribe(res => {
                setCause(res);
            }, err => {
                if (err.status === 404) {
                    alert("Cause not found");
                    navigate("/causes");
                    return;
                }
                console.error(err);
                alert("Something went wrong");
                navigate("/causes");
            });
    }
    return { GetAllCauses, GetCauseById };
}
