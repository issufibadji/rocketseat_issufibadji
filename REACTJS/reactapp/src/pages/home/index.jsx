import React, { useState } from "react" //importaçõa de stado
import "./styles.css"
import { Card } from "../../components/Card"
export function Home() {
  const [studentName, setStudenteName] = useState("") //funcao de e paramtro de stados
  //===========imutabilidade=======
  const [students, setStudents] = useState([]) //criar no statdo imutabiliddade

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    }
    //setStudents([newStudent])
    setStudents((prevState) => [...prevState, newStudent])
  }
  return (
    <div className="container">
      <h1>Lista de Presença</h1>

      <input
        type="text"
        placeholder="Digite nome..."
        onChange={(e) => setStudenteName(e.target.value)} //função de event stado
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
      {students.map((student) => (
        <Card name={student.name} time={student.time} />
      ))}
    </div>
  )
}

//export default Home => remover export e colocar a cima no (export function Home())
