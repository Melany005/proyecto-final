import { useState } from "react";
import styles from "./Nota.module.css";

function RegistroNotas({ estudiantes, setEstudiantes }) {
    const [nombre, setNombre] = useState("");
    const [nota1, setNota1] = useState("");
    const [nota2, setNota2] = useState("");
    const [nota3, setNota3] = useState("");

    function registrar(evento) {
        evento.preventDefault();

        const n1 = Number(nota1);
        const n2 = Number(nota2);
        const n3 = Number(nota3);
        const promedio = (n1 + n2 + n3) / 3;
        let estado = "Desaprobado";

        if (promedio >= 13) estado = "Aprobado";

        const estudiante = {
            nombre: nombre,
            nota1: n1,
            nota2: n2,
            nota3: n3,
            promedio: promedio.toFixed(2),
            estado: estado
        };

        setEstudiantes([...estudiantes, estudiante]);
        setNombre("");
        setNota1("");
        setNota2("");
        setNota3("");
    }

    return (
        <main className={styles.contenedor}>
            <h1>Sistema de gestión de notas</h1>
            <h2>Registrar estudiante</h2>
            <form className={styles.formulario} onSubmit={registrar}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Nombre del estudiante"
                    value={nombre}
                    onChange={(evento) => setNombre(evento.target.value)}
                    required
                />
                <input
                    className={styles.input}
                    type="number"
                    min="0"
                    max="20"
                    placeholder="Nota 1"
                    value={nota1}
                    onChange={(evento) => setNota1(evento.target.value)}
                    required
                />
                <input
                    className={styles.input}
                    type="number"
                    min="0"
                    max="20"
                    placeholder="Nota 2"
                    value={nota2}
                    onChange={(evento) => setNota2(evento.target.value)}
                    required
                />
                <input
                    className={styles.input}
                    type="number"
                    min="0"
                    max="20"
                    placeholder="Nota 3"
                    value={nota3}
                    onChange={(evento) => setNota3(evento.target.value)}
                    required
                />
                <button className={styles.boton} type="submit">
                    Registrar notas
                </button>
            </form>
        </main>
    );
}

export default RegistroNotas;
