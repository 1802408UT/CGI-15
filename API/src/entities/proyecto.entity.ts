import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from 'typeorm';
import { Tarea } from './tarea.entity';
import { Persona } from './persona.entity';

@Entity()
export class Proyecto extends BaseEntity {
  @PrimaryGeneratedColumn()
  ProyectoID: number;

  @Column()
  Nombre: string;

  @Column()
  Descripción: string;

  @Column({ type: 'date' })
  FechaInicio: Date;

  @Column({ type: 'date' })
  FechaFinalización: Date;

  @OneToMany(() => Tarea, tarea => tarea.proyecto)
  tareas: Tarea[];

  @OneToMany(() => Persona, persona => persona.proyecto)
  personas: Persona[];
    equipos: any;
}
