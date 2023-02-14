import { Max, Min, IsInt, IsDefined } from 'class-validator';

export default class NewCsigaDto {
  @IsDefined({ message: 'A név megadása kötelező' })
  nev: string;

  @Min(1, { message: 'A sebbeségnek legalább 1-nek kell lennie' })
  @Max(5, { message: 'A sebbeség maximum 5 lehet' })
  @IsInt({ message: 'A sebbeségnek 1 és 5 közötti egész számnak kell lennie' })
  sebbeseg: number;
}
