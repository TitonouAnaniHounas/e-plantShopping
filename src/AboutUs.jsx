import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">À propos</h1> */}
      <p className="about-us-description">Bienvenue chez Paradise Nursery, là où le vert rencontre la sérénité !</p>
      <p className="about-us-content">
        Chez Paradise Nursery, nous sommes passionnés par l'idée de rapprocher la nature de vous. Notre mission est de 
        proposer une large gamme de plantes de haute qualité qui non seulement embellissent votre environnement, mais 
        contribuent aussi à un mode de vie plus sain et plus durable. Des plantes purificatrices d'air aux plantes 
        aromatiques et parfumées, nous avons quelque chose pour chaque passionné de plantes.
      </p>
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
        Notre équipe d'experts s'assure que chaque plante répond à nos normes strictes de qualité et de soin. Que vous 
        soyez un jardinier expérimenté ou que vous débutiez votre parcours vert, nous sommes là pour vous accompagner 
        à chaque étape. N'hésitez pas à explorer notre collection, à poser des questions, et à nous laisser vous aider 
        à trouver la plante parfaite pour votre maison ou votre bureau.
      </p>
      {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

      <p className="about-us-content">
        Rejoignez-nous dans notre mission de créer un monde plus vert et plus sain. Visitez Paradise Nursery dès 
        aujourd'hui et découvrez la beauté de la nature directement chez vous.
      </p>
    </div>
  );
}

export default AboutUs;