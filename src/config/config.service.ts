import * as fs from 'fs';
import { parse } from 'dotenv'; 

export class ConfigService{
    private readonly envConfing: { [key: string]: string };

    constructor(){
        const isDevelopmentEnv = process.env.NODE_ENV !== "production";

        if(isDevelopmentEnv){
            const envFilePath = __dirname + '/../../.env';
            const existsPath = fs.existsSync(envFilePath);

            if(!existsPath){
                console.log('.env file does not exist');
                process.exit(0);
            }
            else
            { this.envConfing = parse(fs.readFileSync(envFilePath)); }
        }
        else
        { this.envConfing = { PORT: process.env.PORT }; }
    }

    get(key:string):string{
        return this.envConfing[key];
    }

}