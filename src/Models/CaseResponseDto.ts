export type CaseResponseListDto = CaseResponseDto[];

export interface CaseResponseDto {
    remainingDonations: number;
    resolveStatus: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    caseLogs: any[];
    title: string;
    caseId: number;
    causeName: string;
    requiredDonations: number;
    verifiedStatus: boolean;
    collectedDonations: number;
    userCnic: number;
    description: string;
    resolvedStatus: boolean;
}
