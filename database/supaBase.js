import { createClient } from '@supabase/supabase-js';

class DataBase {
    constructor() {
        // Implementación predeterminada
    }

    async connect() {
        throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
    }
}

class SupaBase extends DataBase {
    constructor() {
        super();

        // Datos de conexión a la primera base de datos
        this.dataBaseUrl = process.env.DATABASE_URL;
        this.dataKey = process.env.DATABASE_SERVICE_ROLE_KEY;

        // Datos de conexión a la segunda base de datos
        this.dataBaseUrlBackup = process.env.DATABASE_URL_BACKUP || '';
        this.dataKeyBackup = process.env.DATABASE_SERVICE_ROLE_KEY_BACKUP || '';
    }

    async connect() {
        try {
            const dataBase = createClient(this.dataBaseUrl, this.dataKey, {
                auth: {
                    autoRefreshToken: false,
                    persistSession: false
                }
            });
            const { data } = await dataBase.from('status').select();
            if (data) {
                console.log("Conectado a la Primera Base de Datos");
                return dataBase;
            }
        } catch (err) {
            console.error(`Error al conectar a la base de datos 1: ${err}`);
        }

        try {
            const dataBaseBackup = createClient(this.dataBaseUrlBackup, this.dataKeyBackup, {
                auth: {
                    autoRefreshToken: false,
                    persistSession: false
                }
            });
            const { data } = await dataBaseBackup.from('status').select();

            if (data) {
                console.log("Conectado a la Segunda Base de Datos");
                return dataBaseBackup;
            }
        } catch (err) {
            console.error(`Error al conectar a la base de datos 2: ${err}`);
        }

        return null;
    }
}

export { SupaBase as DataBase };
