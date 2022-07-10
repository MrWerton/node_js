import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {v4 as uuidV4} from 'uuid';

@Entity("users")
export class User{
    @PrimaryGeneratedColumn()
    id?: string
    @Column()
    name: string
    @Column()
    age: number

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}
