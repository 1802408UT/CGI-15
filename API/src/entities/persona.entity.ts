import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, BaseEntity } from 'typeorm';
import { Tarea } from './tarea.entity';
import { Proyecto } from './proyecto.entity';

@Entity()
export class Persona extends BaseEntity {
  @PrimaryGeneratedColumn()
  PersonaID: number;

  @Column()
  Nombre: string;

  @Column()
  Estado: string;

  @ManyToMany(() => Tarea)
  @JoinTable()
  tareas: Tarea[];

  @ManyToOne(() => Proyecto, proyecto => proyecto.personas)
  proyecto: Proyecto;
}
