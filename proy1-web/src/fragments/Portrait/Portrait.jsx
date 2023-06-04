import * as styles from './Portrait.module.css'
import Button from '../../components'

function Portrait() {
  const text = 'Meet DataGrip, our new database IDE that is tailored to suit the specific needs of professional SQL developers.'

  return (
    <div className={styles.portrait}>
      <div className={styles.header}>
        <div className={styles.flex}>
          <img
            className={styles.logo}
            alt="Datagrip Logo"
            src="https://github.com/JDgomez2002/proy1_web/blob/main/proy1-web/src/assets/img/datagrip_logo.png?raw=true"
          />
          <h1>DataGrip</h1>
        </div>
        <h2>Many databases, one tool</h2>
        <div className={`${styles.flex} ${styles.marginTop}`}>
          <Button
            text="Download"
            color="#27282C"
            fontColor="white"
            borderColor="rgba(0, 0, 0, 0)"
            fontWeight="bold"
            padding="15px 30px"
          />
        </div>
        <p>Free 30-day trial</p>
      </div>
      <div className={styles.infoContainer}>
        <h1>Why DataGrip</h1>
        <h2>Enjoy working with databases</h2>
        <p>{text}</p>
        <Button
          text="&nbsp;&nbsp;Take a tour"
          color="#27282C"
          fontColor="white"
          borderColor="rgba(0, 0, 0, 0)"
          fontWeight="normal"
          padding="15px 35px"
          icon
        />
      </div>
    </div>
  )
}

export default Portrait
