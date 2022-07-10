import {DataSource} from 'typeorm'
import { User } from '../../modules/User/entities/User'
import { User1657435834925 } from './migrations/1657435834925-User'

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./src/infra/database/database.sqlite",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [User1657435834925]
})

export async function createConnection(){
    return dataSource.initialize().then(()=>console.log('database run')).catch((e)=>console.log('error', e))
  }
  