import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  let [zoo, setZoo] = useState();

  useEffect(() => {
    console.log("Me ejecuté al montar el component");
  }, []);

  return (
    <div>
      <h1>-</h1>
    </div>
  );
}
