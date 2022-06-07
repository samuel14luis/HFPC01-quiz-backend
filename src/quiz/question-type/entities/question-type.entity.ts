import { User } from './../../../auth/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({})
export class QuestionType {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @Unique('uniqueName', ['name'])
  name: string;

  @ManyToOne((type) => User, (user) => user.questionTypes)
  @JoinColumn({ name: 'fk_idUserCreator' })
  user: User;
}