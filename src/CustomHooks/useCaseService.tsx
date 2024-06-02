import CaseService from "../Services/CaseService";


type TGetResolvedCaseCount = (setResolvedCaseCount: (cc: number) => void) => void;

interface ICaseReturn {
    GetResolvedCaseCount: TGetResolvedCaseCount;
}

export default function useCaseService(): ICaseReturn{
    // instantiating the CaseService class
    const _caseService: CaseService = new CaseService();
    const GetResolvedCaseCount: TGetResolvedCaseCount = (setResolvedCaseCount) => {
        _caseService.GetResolvedCaseCount$()
            .subscribe(res => {
                setResolvedCaseCount(res);
            }, err => {
                console.error(err);
                alert("Something went wrong, please try again later.");
            })
    }
    return {GetResolvedCaseCount}
}
