import React from "react";
import Botones from "./Botones";

const studentName = "Paula Arce";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá

  const techSkillsMap = techSkills.map((element,index) => <li key={index}>{element}</li>);

  return (
    <div>
      <h1>Hola</h1> 
      <h3>{studentName}</h3>
      <ul>{techSkillsMap}</ul>
      <Botones alert = {alerts}></Botones>
    </div>
  );
  
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
