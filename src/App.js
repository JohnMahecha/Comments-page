import './App.css';
import Testimonio from "./Componentes/Testimonio";

function App() {
  return (
    <div className="App">´
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos de freeCodeCamp</h1>
        <Testimonio 
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="emma"
          cargo="Ingeniera de software"
          empresa="Spotify"
          testimonio="Siempre me ha costado aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify." 
          />
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          imagen="shaw"
          cargo="Ingeniero de software"
          empresa="Amazon"
          testimonio="Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando durante cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida. " 
          />
        <Testimonio
          nombre="Sara Chima"
          pais="Nigeria"
          imagen="sarah"
          cargo="Ingeniero de software"
          empresa="ChatDesk"
          testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de codificación desde un nivel principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble. "
          />
      </div>
    </div>
  );
}

export default App;
