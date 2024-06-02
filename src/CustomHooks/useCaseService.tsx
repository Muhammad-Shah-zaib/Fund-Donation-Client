import { CaseResponseListDto } from "../Models/CaseResponseDto";
import CaseService from "../Services/CaseService";


type TGetResolvedCaseCount = (setResolvedCaseCount: (cc: number) => void) => void;
type TGetVerifiedCases = (setVerifiedCases: (vc: CaseResponseListDto) => void) => void;

interface ICaseReturn {
    GetResolvedCaseCount: TGetResolvedCaseCount;
    GetAllVerfiedCases: TGetVerifiedCases;
}

export default function useCaseService(): ICaseReturn{
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
    return {GetResolvedCaseCount, GetAllVerfiedCases}
}
