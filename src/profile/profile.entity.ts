import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fullName: string;
  @Column()
  company: string;
  @Column()
  position: string;
  @Column()
  dateOfBirth: Date;
  @Column()
  phoneNumber: string;
  @Column({ nullable: true })
  additionalPhoneNumber: string;
  @Column()
  email: string;
  @Column({ nullable: true })
  additionalEmail: string;
  @Column()
  website: string;
  @Column({ nullable: true })
  additionalWebsite: string;
  @Column({ nullable: true })
  facebook: string;
  @Column({ nullable: true })
  instagram: string;
  @Column({ nullable: true })
  telegram: string;
  @Column({ nullable: true })
  whatsapp: string;
  @Column({ nullable: true })
  vk: string;
  @Column({ nullable: true })
  tikTok: string;
  @Column({ nullable: true })
  linkedIn: string;
  @Column({ nullable: true })
  youTube: string;
  @Column({ nullable: true })
  skype: string;
  @Column({ nullable: true })
  moreDetails: string;
}
