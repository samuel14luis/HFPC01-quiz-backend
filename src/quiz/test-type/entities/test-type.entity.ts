import { User } from './../../../auth/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Test } from 'src/quiz/test/entities/test.entity';

@Entity({})
export class TestType {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @Unique('uniqueName', ['name'])
  name: string;

  @ManyToOne((type) => User, (user) => user.testTypes, { nullable: false })
  @JoinColumn({ name: 'fk_idUserCreator' })
  fk_idUserCreator: User;

  @OneToMany((type) => Test, (test) => test.fk_idTestType)
  tests: Test;
}