import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserType } from './../../user-type/entities/user-type.entity';

@Entity({})
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  shortname: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  creationDate: Date;

  @Column()
  updateDate: Date;

  @OneToOne((type) => User, (user) => user.user)
  @JoinColumn({ name: 'fk_idParentUser' })
  user: User;

  @ManyToOne((type) => UserType, (userType) => userType.users, {
    cascade: true,
  })
  @JoinColumn({ name: 'fk_idUserType' })
  userType: UserType;

}
