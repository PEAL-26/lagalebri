import { IsNotEmpty } from 'class-validator';

export class SignupPhoneBodyDto {
  @IsNotEmpty()
  name: string;
}
