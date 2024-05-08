import mongoose from 'mongoose';
export default async function coon() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(
            "mongodb+srv://pedrotorrezani6565:Pindu2023@cluster0.gqgfdw6.mongodb.net/ScoutTeam?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("Conectado ao banco de dados");
    } catch (error) {
        console.error(`Erro ao conectar ao banco de dados: ${error}`);
    }
}

