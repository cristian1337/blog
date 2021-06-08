import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className="explanation usuario">
        <div className="presentacion-usuario">
          <h5>¡Hola a todos!</h5>
          <h2 className="nombre">Soy Cristian</h2>
          <p className="intro">
            Full Stack Developer que le encanta implementar diseños que inspiran
            y atraen a las personas, ademas de esto, crear software que cambie y
            mejore vidas a traves de tecnología.
          </p>
          <div className="seccion-redes redes-header">
            <img src="/telefono.svg" alt="telefono" />
            <img src="/correo.svg" alt="correo" />
            <img src="/instagram.svg" alt="instagram" />
            <img src="/twitter.svg" alt="twitter" />
          </div>
          <div className="curriculum">
            <ExtLink className="boton">DESCARGAR CURRICULUM</ExtLink>
          </div>
        </div>
        <div>
          <img className="foto-presentacion" src="/user.png" alt="" />
        </div>
      </div>
      <div className="explanation carrera">
        <p className="intro-carrera">
          A lo largo de mi carrera como Frontend, he tenido el privilegio de
          trabajar en proyectos retadores e increíbles
        </p>
        <h5 className="compartir">
          Aquí hay algunos que me gustaría compartir.
        </h5>
        <img src="flecha-abajo.png" alt="flecha abajo" />
      </div>
      <div id="proyectos" className="explanation portafolio empleos-eje">
        <div className="info-proyecto">
          <h4 className="titulo-proyecto">empleosdeleje.com</h4>
          <p>
            Accede a ofertas laborales en el eje cafetero, además de ofrecerte
            servicios para mejorar tu hoja de vida y tus entrevistas laborales
          </p>
          <ExtLink href="https://empleosdeleje.com" className="ver-proyecto">
            VER PROYECTO
          </ExtLink>
        </div>
        <div className="imagen-proyecto">
          <img src="/mockup-web-empleos-del-eje.png" alt="empleos del eje" />
        </div>
      </div>
      <div className="explanation">
        <div className="recomendaciones">
          <img src="/leonidas.png" alt="leonidas" />
          <p className="texto-recomendacion">
            "Jaume ha sido de gran ayuda para acelerar ciertos esfuerzos de
            desarrollo. Lo que nos hubiera llevado 6 meses solo les llevó 1,5
            meses ".
          </p>
          <h5 className="nombre-recomendacion">
            LEONIDAS ESTEBAN / COFUNDADOR Y CEO LEONIDASESTEBAN.COM
          </h5>
        </div>
      </div>
      <div id="proyectos" className="explanation portafolio">
        <div className="imagen-proyecto">
          <img src="/tablet-top-travel.png" alt="top-travel" />
        </div>
        <div className="info-proyecto">
          <h4 className="titulo-proyecto">toptravel.com.co</h4>
          <p>
            Página web de agencia de viajes, donde los clientes pueden ver los
            vuelos disponibles, precios y poder hacer su reserva en linea
          </p>
          <ExtLink href="https://toptrevel.com.co" className="ver-proyecto">
            VER PROYECTO
          </ExtLink>
        </div>
      </div>
      <div className="explanation">
        <div className="recomendaciones">
          <img src="/usuario-2.png" alt="leonidas" />
          <p className="texto-recomendacion">
            "Jaume ha superado mis expectativas desde el diseño hasta el
            desarrollo".
          </p>
          <h5 className="nombre-recomendacion">
            JASON LOPEZ / COFUNDADOR Y CEO MARVOL
          </h5>
        </div>
      </div>
      <div id="proyectos" className="explanation portafolio app">
        <div className="info-proyecto margin-app">
          <h4 className="titulo-proyecto">Delivery Taste</h4>
          <p>
            Web app de delivery hecha en Svelte, en ella se puede agregar los
            productos al carrito, añadir tus adiciones y bebidas preferidas y
            por supuesto finalizar tu compra.
          </p>
          <div className="botones">
            <ExtLink
              href="https://cranky-bose-fac8af.netlify.app/"
              className="ver-proyecto"
            >
              VER PROYECTO
            </ExtLink>
            <ExtLink
              href="https://cranky-bose-fac8af.netlify.app/"
              className="ver-codigo"
            >
              VER CODIGO
            </ExtLink>
          </div>
        </div>
        <div className="imagen-proyecto margin-app">
          <img src="/delivery-app.png" alt="app de delivery" />
        </div>
      </div>
      <div className="explanation">
        <div className="recomendaciones">
          <img src="/usuario-3.png" alt="leonidas" />
          <p className="texto-recomendacion">
            "Por primera vez en la historia de nuestra empresa, aparecimos en
            todas las plataformas en las que trabajamos".
          </p>
          <h5 className="nombre-recomendacion">MARCO CORTEZ / NETNET</h5>
        </div>
      </div>
      <div className="explanation hablemos">
        <div className="formulario">
          <h4 className="titulo-proyecto center">HABLEMOS</h4>
          <p className="texto-form center">
            Si está interesado en trabajar conmigo en su próximo proyecto, no
            dude en ponerse en contacto conmigo.
          </p>
          <form action="">
            <div className="nombre">
              <label>Nombre completo</label>
              <input type="text" placeholder="Cristian" />
            </div>
            <div className="correo">
              <label>Correo electrónico</label>
              <input type="text" placeholder="cristian@gmail.com" />
            </div>
            <div className="mensaje">
              <label>Mensaje</label>
              <textarea name="" id=""></textarea>
            </div>
            <div className="enviar">
              <button>ENVIAR MENSAJE</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
