import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export default class Csiga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nev: string;

  @Column()
  sebbeseg: number;
}
