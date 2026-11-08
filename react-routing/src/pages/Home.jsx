import heroImage from "../assets/images.png";

function Home() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>BIENVENIDO</h1>
            <h2>Sistema de Gestión de Notas</h2>
            <p>Ingrese a Registrar Notas para comenzar.</p>
            <img src={heroImage} alt="Imagen de bienvenida" />
        </div>
    );
}
export default Home
