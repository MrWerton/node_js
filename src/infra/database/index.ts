import {DataSource} from 'typeorm'
import { User } from '../../modules/User/entities/User'
import { PostRefactoring1657430456216 } from '../1657430456216-PostRefactoring'

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./src/infra/database/database.sqlite",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [PostRefactoring1657430456216]
})

export async function createConnection(){
    return dataSource.initialize().then(()=>console.log('database run')).catch((e)=>console.log('error', e))
  }
  