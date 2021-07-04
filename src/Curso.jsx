import React from 'react'
import PropTypes from 'prop-types'

//const curso = {
//  "title": "React desde cero",
//  "image": "https://edteam-media.s3.amazonaws.com/courses/big/7204fcde-37aa-49a2-a619-63459f834ada.png",
//  "price": "50usd"
//}

//const mayorEdad = edad => edad > 18
//const persona ={"nombre":"Alberto", "Apellido":"Quiroga", "edad": 9}

const Curso = ({title, image, price, profesor}) => (
    
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={image} alt={title} />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
          {title}
        </h3>
        <div className="s-main-center">
          {profesor}
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="#">
            {`$ ${price}`}
          </a>
        </div>
      </div>
    </article>

);

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
}

Curso.defaultProps = {
  title: "No se encontró título",
  image: "https://images.adsttc.com/media/images/594d/7f74/b22e/3898/a700/0951/newsletter/ciudad.jpg?1498251119",
  price: "--",
  profesor: ""
}

export default Curso;