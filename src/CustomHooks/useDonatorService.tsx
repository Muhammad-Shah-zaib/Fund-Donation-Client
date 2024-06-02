import DonatorService from "../Services/DonatorService"

type TGetDonatorCount = (setDonatorCount: (dc: number) => void) => void;


interface IDonatorReturn {
    GetDonatorCount: TGetDonatorCount;
}

// all the Donator APIs logic will be here (except the middlewares)
export default function useDonatorService(): IDonatorReturn {
    // lets instantiate the Donator class first
    const _donatorService: DonatorService = new DonatorService();  

    // function to get the Donator Count
    const GetDonatorCount: TGetDonatorCount = (setDonatorCount) => {
        _donatorService.GetDonatorCount$()
            .subscribe(res => {
                setDonatorCount(res);
            }, err => {
                console.error(err);
                alert("Something went wrong, please try again later.");
            })
    }

    return {GetDonatorCount};
}
