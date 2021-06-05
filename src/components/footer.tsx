import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer className="explanation">
        <img className="logo-blanco" src="/logo-blanco.svg" alt="logo" />
        <div className="seccion-redes">
          <p>
            Hecho con &#128153; por Cristian. Copyright 2021 - todos los
            derechos reservados.
          </p>
          <img src="/telefono.svg" alt="telefono" />
          <img src="/correo.svg" alt="correo" />
          <img src="/instagram.svg" alt="instagram" />
          <img src="/twitter.svg" alt="twitter" />
        </div>
      </footer>
    </>
  )
}
