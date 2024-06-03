export type CauseResponseListDto = CauseResponseDto[];

export interface CauseResponseDto {
    causeId: number;
    causeTitle: string;
    causeDescription: string;
    collectedDonation: number;
}
