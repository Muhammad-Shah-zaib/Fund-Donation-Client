import { useNavigate } from "react-router-dom";
import { CaseResponseDto, CaseResponseListDto } from "../Models/CaseResponseDto";
import CaseService from "../Services/CaseService";


type TGetResolvedCaseCount = (setResolvedCaseCount: (cc: number) => void) => void;
type TGetVerifiedCases = (setVerifiedCases: (vc: CaseResponseListDto) => void) => void;
type TGetCaseById = (setActiveCase: (ac: CaseResponseDto) => void, id: number) => void;
interface ICaseReturn {
    GetResolvedCaseCount: TGetResolvedCaseCount;
    GetAllVerfiedCases: TGetVerifiedCases;
    GetCaseById: TGetCaseById;
}

export default function useCaseService(): ICaseReturn{
    // router hooks
    const navigate = useNavigate();
    // instantiating the CaseService class
    const _caseService: CaseService = new CaseService();
    const GetResolvedCaseCount: TGetResolvedCaseCount = (setResolvedCaseCount) => {
        _caseService.GetResolvedCaseCount$()
            .subscribe(res => {
                setResolvedCaseCount(res);
                console.log("ss");
            }, err => {
                console.error(err);
                alert("Something went wrong, please try again later.");
            })
    }

    const GetAllVerfiedCases: TGetVerifiedCases = (serVerifiedCases) => {
        _caseService.GetAllVerifieddCases$()
            .subscribe(res => {
                serVerifiedCases(res);
            }, err => {
                console.error(err);
                alert("Something went wrong, please try again later.");
            })
    }

    const GetCaseById: TGetCaseById = (setActiveCase, id) => {
        _caseService.GetCaseById$(id)
            .subscribe(res => {
                setActiveCase(res);
            }, err => {
                if (err.status === 404) alert("Case not found");
                else {
                    console.error(err);
                    alert("Something went wrong, please try again later.");
                }
                navigate("/cases");
            });
    }
    return {GetResolvedCaseCount, GetAllVerfiedCases, GetCaseById}
}
