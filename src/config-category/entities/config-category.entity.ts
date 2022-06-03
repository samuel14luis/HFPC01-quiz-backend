import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({})
export class ConfigCategory {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;
}
