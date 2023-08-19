import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './assets/componentes/Card';
import Footer from './assets/componentes/Footer';
import Header from './assets/componentes/Header';
import catone from "./assets/imagenes/siberiano.jpg";
import cattwo from "./assets/imagenes/angora.jpg";
import catthree from "./assets/imagenes/bengali.jpg";

function App() {
  return (
    <>
    <Header  title="Adopta un Gatito"/>
    
    <section className='container'>

    <Card image= {catone} 
            name="Chimuelo"
            information="Un hermoso gato que es muy regalón y dormilón, esperando su oportunidad."
            text="Siberiano"
            color="Primary"
            />
    <Card image= {cattwo}  
            name="Jacinto"
            information="Con muchos años de vida pero con ganas de jugar y comer mucho, este lindo gatito te espera."
            text="Angora"
             
            />
    <Card image= {catthree}  
            name="Shrek"
            information="Un gato muy pequeño y jugueton, listo para ser amado y con mucha energía."
            text="Bengalí"
            />
    
    </section>
    <Footer  info="Estamos emocionados de tenerlos aquí en Adoptin, un lugar lleno de amor y esperanza, donde los gatitos encuentran su camino hacia hogares amorosos y familias cariñosas. Creemos en el poder de la adopción responsable y estamos comprometidos a crear vínculos duraderos entre los gatitos y sus nuevas familias."                        />
    </>

    
    
    
    
    
    
  );
}

export default App
