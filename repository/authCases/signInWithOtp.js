class SignInWithOtp {
    constructor() {
        // Implementación predeterminada
    }

    async signInWithOtp() {
        throw new Error("Sobreescribir para obtener la instancia de la Base de datos");
    }
}

class SignInWithOtp_SupaBase extends SignInWithOtp {
    constructor() {
        super();
        // Implementación predeterminada
    }

    async signInWithOtp(dataBase, email, emailRedirectTo) {
        const { error } = await dataBase.auth.signInWithOtp({ email, options: { emailRedirectTo } });
        if (error) { throw error; }
    }
}

export { SignInWithOtp_SupaBase as SignInWithOtp };