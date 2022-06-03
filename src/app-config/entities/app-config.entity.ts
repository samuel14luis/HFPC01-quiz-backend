import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({})
export class AppConfig {
    @PrimaryColumn()
    key: string;

    @Column()
    value: string;

    @Column()
    category: string;
}
