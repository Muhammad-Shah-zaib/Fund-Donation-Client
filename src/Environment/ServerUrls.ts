export const serverUrl: string = "http://localhost:5036";

// url for donators
export const donatorUrl: string = `${serverUrl}/Donator`;

// ? API endpoint to get the donators count, it is a GET request that returns an Int32 (Number)
export const getDonatorsCountUrl: string = `${donatorUrl}/GetDonatorCount`;

// url for cases
export const caseUrl: string = `${serverUrl}/Cases`;

// ? API endpoint to get the cases count, it is a GET request that returns an Int32 (Number)
export const getResolvedCaseCountUrl: string = `${caseUrl}/GetResolvedCaseCount`;

// ? API endpoint to get verified cases List, it is a GET request
export const getVerifiedCasesUrl: string = `${caseUrl}/GetAllVerifiedCases`;

// url for caseTranaction
export const caseTransactionUrl: string = `${serverUrl}/CaseTransaction`;

// ? API endpoint to get the totalDonations, it is a GET request that returns an Int32 (Number)
export const getTotalDonationsUrl: string = `${caseTransactionUrl}/GetTotalDonations`;