import { React } from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="h1">Bienvenido</h1>
      <iframe
        width="70%"
        height="50%"
        src="https://www.youtube.com/embed/ycW-iaAfYHI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h2 className="h1">Es un breve video para nuestros graduados</h2>
      <br></br>
      <p></p>
      <h3>Se te invita cordialmente a que puedas asistir a tu graduacion ya que es una fecha importante espero que puedas acompañarños y disfrutes. Por este medio podras apartas tus boleto para tu graduacion si tienes alguna duda podras contactarnos en el apartado de acerca de para que te podamos ayudar.</h3>
    </div>
  );
};

export default Home;
