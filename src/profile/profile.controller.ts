import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProfile } from './dto/createProfile.dto';
import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get('/:id')
  getProfileById(@Param('id', ParseIntPipe) id: number): Promise<Profile> {
    return this.profileService.getProfileById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createProfile(@Body() createProfile: CreateProfile): Promise<Profile> {
    return this.profileService.createTask(createProfile);
  }

  @Delete('/:id')
  deleteProfile(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.profileService.deleteProfile(id);
  }

  @Patch('/:id')
  updateProfile(@Param('id', ParseIntPipe) id: number, @Body() createProfile: CreateProfile): Promise<Profile> {
    return this.profileService.updateProfile(id, createProfile);
  }
}
