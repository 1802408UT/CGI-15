import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';
import { Proyecto } from './proyecto.entity';
import { Persona } from './persona.entity';

@Entity()
export class Tarea extends BaseEntity {
  @PrimaryGeneratedColumn()
  TareaID: number;

  @Column()
  Nombre: string;

  @Column()
  Descripcion: string;

  @Column()
  Estado: string;

  @ManyToOne(() => Proyecto, proyecto => proyecto.tareas)
  proyecto: Proyecto;

  @ManyToOne(() => Persona, persona => persona.tareas)
  persona: Persona;
}
