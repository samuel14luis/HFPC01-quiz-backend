import { User } from './../../../auth/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({})
export class TestType {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @Unique('uniqueName', ['name'])
  name: string;

  @ManyToOne((type) => User, (user) => user.userType, { nullable: false })
  @JoinColumn({ name: 'fk_idUserCreator' })
  users: User;
}