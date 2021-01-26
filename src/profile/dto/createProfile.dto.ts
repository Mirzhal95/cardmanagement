import { IsNotEmpty } from 'class-validator';

export class CreateProfile {
  @IsNotEmpty()
  fullName: string;
  @IsNotEmpty()
  company: string;
  @IsNotEmpty()
  position: string;
  @IsNotEmpty()
  dateOfBirth: Date;
  @IsNotEmpty()
  phoneNumber: string;
  additionalPhoneNumber: string;
  @IsNotEmpty()
  email: string;
  additionalEmail: string;
  @IsNotEmpty()
  website: string;
  additionalWebsite: string;
  facebook: string;
  instagram: string;
  telegram: string;
  whatsapp: string;
  vk: string;
  tikTok: string;
  linkedIn: string;
  youTube: string;
  skype: string;
  moreDetails: string;
}
