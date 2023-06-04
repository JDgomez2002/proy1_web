import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import TranslateIcon from '@mui/icons-material/Translate'
import * as styles from './Topbar.module.css'
import Button from '../../components'

function Topbar() {
  return (
    <>
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
            <div className={styles.iconsContainer}>
              <SearchIcon style={{ fontSize: '20px', margin: '0 10px', }} sx={{ '&:hover': { color: 'white', }, cursor: 'pointer', }} />
              <PersonIcon style={{ fontSize: '20px', margin: '0 10px', }} sx={{ '&:hover': { color: 'white', }, cursor: 'pointer', }} />
              <ShoppingCartIcon style={{ fontSize: '20px', margin: '0 10px', }} sx={{ '&:hover': { color: 'white', cursor: 'pointer', }, }} />
              <TranslateIcon style={{ fontSize: '20px', margin: '0 10px', }} sx={{ '&:hover': { color: 'white', cursor: 'pointer', }, }} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.subContainer}`}>
        <div className={`${styles.itemsContainer}`}>
          <h3>DataGrip</h3>
          <div className={styles.flex}>
            <span className={styles.tags}>What&apos;s new</span>
            <span className={styles.tags}>Features</span>
            <span className={styles.tags}>Documentation</span>
            <span className={styles.tags}>JDBC drivers</span>
            <Button
              text="Pricing"
              color="white"
            />
            <Button
              text="Download"
              color="#087CFA"
              fontColor="white"
              borderColor="rgba(0, 0, 0, 0)"
              fontWeight="normal"
              padding="8px 25px"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar
