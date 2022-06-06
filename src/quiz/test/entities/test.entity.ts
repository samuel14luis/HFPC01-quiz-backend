import { User } from './../../../auth/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { TestType } from 'src/quiz/test-type/entities/test-type.entity';

// idTest, nameTest, descriptionTest, statatusTest, typeTest, idUserCreator

@Entity({})
export class Test {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @Unique('uniqueName', ['name'])
  name: string;

  @Column()
  description: string;

  @Column()
  status: number;

  @ManyToOne((type) => TestType, (testType) => testType.tests, { nullable: false })
  @JoinColumn({ name: 'fk_idTestType' })
  fk_idTestType: TestType;

}