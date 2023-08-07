import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm"
import { MinLength, MaxLength, isEmail, IsNotEmpty } from "class-validator";


@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    first_name: string;

    @Column()
    @MinLength(0)
    @MaxLength(10)
    second_name: string;
    
    @Column()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(10)
    first_apellido: string;

    @Column()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(10)
    second_apellido: string;

    @Column()
    @IsNotEmpty()
    @MinLength(9)
    birthday: string;

    @Column({default: true})
    active: boolean;

    @Column()
    @IsNotEmpty()
    email : string;

    @Column()
    @MinLength(4)
    @MaxLength(16)
    password: string;

    @Column()
    @MinLength(2)
    @MaxLength(10)
    area: string;

    @Column({default: "Empleado"})
    rol: string;

    @Column({default: "https://drive.google.com/file/d/1uNvf7UELpC1rUOIXfxzOzv-cRQoHPKtP/view?usp=drive_link" })
    img: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}