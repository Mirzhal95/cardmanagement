import { Profile } from './profile.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProfile } from './dto/createProfile.dto';

@EntityRepository(Profile)
export class ProfileRepository extends Repository<Profile> {

    async createTask(createProfileDTO: CreateProfile):Promise<Profile> {
        const {
          fullName,
          company,
          position,
          dateOfBirth,
          phoneNumber,
          additionalPhoneNumber,
          email,
          additionalEmail,
          website,
          additionalWebsite,
          facebook,
          instagram,
          telegram,
          whatsapp,
          vk,
          tikTok,
          linkedIn,
          youTube,
          skype,
          moreDetails,
        } = createProfileDTO;
    
        const profile = new Profile()
      profile.fullName = fullName;
      profile.company = company;
          profile.position = position;
          profile.dateOfBirth = dateOfBirth;
          profile.phoneNumber = phoneNumber;
          profile.additionalPhoneNumber = additionalPhoneNumber;
          profile.email = email;
          profile.additionalEmail = additionalEmail;
          profile.website = website;
          profile.additionalWebsite = additionalWebsite;
          profile.facebook = facebook;
          profile.instagram = instagram;
          profile.telegram = telegram;
          profile.whatsapp = whatsapp;
          profile.vk = vk;
          profile.tikTok = tikTok;
          profile.linkedIn = linkedIn;
          profile.youTube = youTube;
          profile.skype = skype;
          profile.moreDetails = moreDetails;
    
          await profile.save()
    
          return profile
    
      }
}
