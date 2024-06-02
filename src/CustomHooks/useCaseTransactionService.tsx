import CaseTransactionService from "../Services/CaseTransactionService";

type TGetTotalDonation = (setDonations: (dc: number) => void) => void;

interface ICaseTransactionReturn {
    GetTotalDonation: TGetTotalDonation;
}
export default function useCaseTransactionService(): ICaseTransactionReturn {
    // instantiaing the caseTransaction class
    const _caseTransaction: CaseTransactionService = new CaseTransactionService();

    // to get all the donations
    const GetTotalDonation: TGetTotalDonation = (setDonations) => {
        _caseTransaction.GetTotalDonations$()
            .subscribe(res => {
                setDonations(res);
            },err => {
                console.error(err);
                alert("Something went wrong, please try again later.");
            })
    }
    return {GetTotalDonation}
}
