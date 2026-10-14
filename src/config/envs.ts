import 'dotenv/config';
import joi from 'joi';

interface Envars{
    PORT:number;
}


const envsSchema = joi.object<Envars>({
    PORT: joi.number().integer().min(1).max(234356).required(),
}).unknown(true);

const result = envsSchema.validate(process.env, {abortEarly: false});
if (result.error) {
    throw new Error(`Config Validation error: ${result.error.message}`);
}
const envars = result.value;

export const envs ={
    port: envars.PORT,
}as const;