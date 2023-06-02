import * as styles from './Topbar.module.css'

function Topbar() {
  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        <img
          className={styles.logo}
          alt="logo"
          src="https://github.com/JDgomez2002/proy1_web/blob/main/proy1-web/src/assets/img/jetbrains_logo_icon.png?raw=true"
        />
        <div className={`${styles.flex} ${styles.geologica}`}>
          <a href="none"> Developer Tools </a>
          <a href="none"> Team Tools </a>
          <a href="none"> Education </a>
          <a href="none"> Solutions </a>
          <a href="none"> Support </a>
          <a href="none"> Store </a>
        </div> 
      </div>
    </div>
  )
}

export default Topbar
