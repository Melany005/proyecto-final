import styles from "./Nota.module.css";

function ListaNotas({ estudiantes, setEstudiantes }) {
    return (
        <main className={styles.contenedor}>
            <h1>Lista de notas</h1>

            {estudiantes.length === 0 && <p>No hay estudiantes registrados.</p>}

            {estudiantes.map((estudiante, indice) => (
                <div className={styles.estudiante} key={indice}>
                    <h2>{estudiante.nombre}</h2>
                    <p>Nota 1: {estudiante.nota1}</p>
                    <p>Nota 2: {estudiante.nota2}</p>
                    <p>Nota 3: {estudiante.nota3}</p>
                    <p>Promedio: {estudiante.promedio}</p>
                    <p>Estado: {estudiante.estado}</p>
                    <button
                        className={styles.botonEliminar}
                        onClick={() => setEstudiantes(
                            estudiantes.filter((item, i) => i !== indice)
                        )}
                    >
                        Eliminar
                    </button>
                </div>
            ))}
        </main>
    );
}
export default ListaNotas
