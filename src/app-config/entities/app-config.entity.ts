import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({})
export class AppConfig {
    @PrimaryColumn()
    key: number;

    @Column()
    value: string;

    @Column()
    category: string;
}
