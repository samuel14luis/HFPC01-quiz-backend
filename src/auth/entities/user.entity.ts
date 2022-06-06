import { TestType } from 'src/quiz/test-type/entities/test-type.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
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
  @Unique('uniqueEmail', ['email'])
  email: string;

  @Column()
  @Unique('uniqueUsername', ['username'])
  username: string;

  @Column()
  password: string;

  @Column()
  creationDate: Date;

  @Column()
  updateDate: Date;

  @OneToOne((type) => User, (user) => user.user, {
    nullable: true
  })
  @JoinColumn({ name: 'fk_idParentUser' })
  user: User;

  @ManyToOne((type) => UserType, (userType) => userType.users, {
    cascade: true,
    nullable: false
  })
  @JoinColumn({ name: 'fk_idUserType' })
  userType: UserType;

  @OneToMany((type) => TestType, (testType) => testType.fk_idUserCreator)
  testTypes: TestType;

}
