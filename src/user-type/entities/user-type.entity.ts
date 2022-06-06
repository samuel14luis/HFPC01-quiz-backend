import { User } from './../../auth/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({})
export class UserType {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @Unique('uniqueName', ['name'])
  name: string;

  @OneToMany((type) => User, (user) => user.userType)
  users: User;
}