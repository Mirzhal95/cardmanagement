import { Get, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { link } from 'fs';
import { CreateProfile } from './dto/createProfile.dto';
import { Profile } from './profile.entity';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileRepository)
    private profileRepository: ProfileRepository,
  ) {}

  async getProfileById(id: number): Promise<Profile> {
    const found = await this.profileRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return found;
  }

  async createTask(createProfileDTO: CreateProfile): Promise<Profile> {
    return this.profileRepository.createTask(createProfileDTO);
  }

  async deleteProfile(id: number) {
    const result = await this.profileRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }

  async updateProfile(id: number, data: any) {
    await this.profileRepository.update({ id }, data);
    return await this.profileRepository.findOne({ id });
  }

  //   profiles: Profile[] = [];
  //   getAllProfiles(): Profile[] {
  //     return this.profiles;
  //   }
  //   createProfile(): Profile[]{
  //       return this.profiles
  //   }
}
