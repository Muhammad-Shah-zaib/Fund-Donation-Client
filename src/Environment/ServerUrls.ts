export const serverUrl: string = "http://localhost:5036";

// url for donators
export const donatorUrl: string = `${serverUrl}/Donator`;

// ? API endpoint to get the donators count, it is a GET request that returns an Int32 (Number)
export const getDonatorsCountUrl: string = `${donatorUrl}/GetDonatorCount`;

// url for cases
export const caseUrl: string = `${serverUrl}/Cases`;

// ? API endpoint to get the cases count, it is a GET request that returns an Int32 (Number)
export const getResolvedCaseCountUrl: string = `${caseUrl}/GetResolvedCaseCount`;
