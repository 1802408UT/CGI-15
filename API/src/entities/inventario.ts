import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, OneToMany } from "typeorm"
import { MinLength, MaxLength, IsEmail, IsOptional } from "class-validator";


@Entity()
export class Inventario extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @MinLength(2)
    @MaxLength(15)
    Modelo: string;

    @Column()
    @MinLength(2)
    @MaxLength(10)
    Marca: string;
    
    @Column()
    @MinLength(2)
    @MaxLength(10)
    Descripcion: string;

    @Column()
    @MinLength(0)
    @MaxLength(4)
    cantidad: number;

    @Column()
    @MinLength(2)
    @MaxLength(4)
    udm: string;

    @Column()
    @MinLength(2)
    @MaxLength(10)
    estado: string;

    @Column()
    @MinLength(2)
    @MaxLength(10)
    area: string;

/*
    @Column()
    @MinLength(9)
    @MaxLength(4)
    oc: string;
*/
    
/*
    @Column({default: true})
    active: boolean;
*/
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

/* Para compartir atribustos y agregar los que sean necesarios
@Entity()
export class Entradas extends Inventario {
    @Column()
    size: string
}*/
