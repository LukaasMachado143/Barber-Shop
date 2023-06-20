import bcrypt from 'bcryptjs';

export default class PasswordEncoder {

    async encodingPassword(password) {
        try {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            return hashedPassword;
        } catch (error) {
            console.error('Erro ao codificar a senha:', error);
            throw error;
        }
    }

    async verificarLogin(senhaDigitada, senhaCodificada) {
        try {
            const senhaCorreta = await bcrypt.compare(senhaDigitada, senhaCodificada);
            return senhaCorreta;
        } catch (error) {
            console.error('Erro ao verificar login:', error);
            throw error;
        }
    }
}