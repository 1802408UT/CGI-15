import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, JoinTable } from 'typeorm';
import { Proyecto } from './proyecto.entity';

@Entity()
export class Equipo extends BaseEntity {
  @PrimaryGeneratedColumn()
  EquipoID: number;

  @Column()
  Especialidad: string;

  @Column()
  Subespecialidad: string;

  @Column()
  Marca: string;

  @Column()
  Modelo: string;

  @Column()
  Concepto: string;

  @Column()
  Cantidad: number;

  @Column()
  Unidad: string;

  @Column()
  OC: string;

  @Column()
  Estado: string;

  @ManyToOne(() => Proyecto, proyecto => proyecto.equipos)
  proyecto: Proyecto;
}
