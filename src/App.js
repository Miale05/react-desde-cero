import { Fragment } from "react";
import "./styles/styles.scss";
import Curso from './Curso'

const cursos = [
  {
    "title":"React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/big/7204fcde-37aa-49a2-a619-63459f834ada.png",
    "price": 40,
    "profesor": "Beto Quiroga"
  },
  {
    "title":"Drupal desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/ca1912b1-6a3f-4a47-8731-a619a4335b50.png",
    "price": 30,
    "profesor": "Beto Quiroga"
  }, {
    "title":"Go desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png",
    "price": 50,
    "profesor": "Alexys Lozada"
  }, {
    "title":"HTML desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
    "price": 10,
    "profesor": "Alvaro Felipe"
  }
]

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img
            className="main-banner__img"
            alt="banner"
            src="https://i.pinimg.com/originals/45/4d/d3/454dd33dd8a85d430f1e50dcc82cee2d.jpg"
          />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Curso de React EDTeam</p>
            <p>Tu futuro te esta esperando</p>
            <a href="https://ed.team" className="button">
              Suscribirse
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      {
        cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor} /> )
      }
     </div>
  </>
);

export default App;

//REGLAS JSX
//1: Toda etiqueta debe cerrarse
//2: Los componentes deben devolver UN solo elemento padre
//3: Apoyarse de los Fragment cuando necesito devover 2 elementos
//4: Fragment => <> hijos </>
//5: img siempre se cierra
//6: class => className
//7: for => htmlFor
