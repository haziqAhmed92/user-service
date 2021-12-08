import { IsEmail, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UserDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  public readonly id: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  public readonly email: string;
}
