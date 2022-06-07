import { User } from './../../../auth/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { TestType } from 'src/quiz/test-type/entities/test-type.entity';

@Entity({})
export class Test {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  status: number;

  @Column()
  creationDate: Date;

  @Column()
  updateDate: Date;

  @ManyToOne((type) => TestType, (testType) => testType.tests, { nullable: false })
  @JoinColumn({ name: 'fk_idTestType' })
  fk_idTestType: TestType;

  @ManyToOne((type) => User, (user) => user.tests, { nullable: false })
  @JoinColumn({ name: 'fk_idUserCreator' })
  fk_idUserCreator: User;

}