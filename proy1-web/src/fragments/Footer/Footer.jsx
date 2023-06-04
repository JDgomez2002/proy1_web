import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import PublicIcon from '@mui/icons-material/Public'
import TranslateIcon from '@mui/icons-material/Translate'
import * as styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.background}>
      <div className={`${styles.container}`}>
        <div className={`${styles.flex} ${styles.fullWidth} ${styles.boderBottom}`}>
          {/* First Column */}
          <div className={`${styles.textColumn} ${styles.grid}`}>
            <h1>Products</h1>
            <span>IDEs</span>
            <span>.NET & Visual Studio</span>
            <span>Team Tools</span>
            <span>Plugins</span>
            <span>Education</span>
            <span>Languages</span>
            <span>All products</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
          {/* Second */}
          <div className={`${styles.textColumn} ${styles.grid}`}>
            <h1>Solutions</h1>
            <span>C++ Tools</span>
            <span>Data Tools</span>
            <span>DevOps</span>
            <span>Education</span>
            <span>Game Development</span>
            <span>Software Development</span>
            <span>Tools For Business</span>
            <span>Quality Assurance</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
          {/* Third */}
          <div className={`${styles.textColumn} ${styles.grid}`}>
            <h1>Initiatives</h1>
            <span>Kotlin</span>
            <span>JetBrains Mono</span>
            <span>JetBrains Research</span>
            <span>Open Source Projects</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
          {/* Fourth */}
          <div className={`${styles.textColumn} ${styles.grid}`}>
            <h1>Community</h1>
            <span>Academic Licensing</span>
            <span>Open Source Support</span>
            <span>User Groups</span>
            <span>Events Partnership</span>
            <span>Developer Recognition</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
          {/* Fifth */}
          <div className={`${styles.textColumn} ${styles.grid}`}>
            <h1>Resources</h1>
            <span>Sales Support</span>
            <span>Product Support</span>
            <span>Licensing FAQ</span>
            <span>Documentation</span>
            <span>Early Access</span>
            <span>Events and Webinars</span>
            <span>Newsletters</span>
            <span>Industry Reports</span>
            <span>Blog</span>
            <span>Desktop Art</span>
          </div>
          {/* sixth */}
          <div className={`${styles.textColumn} ${styles.grid}`}>
            <h1>Company</h1>
            <span>About</span>
            <span>Contacts</span>
            <span>Careers</span>
            <span>News</span>
            <span>Customers & Awards</span>
            <span>Our Commitment</span>
            <span>Brand Assets</span>
            <span>Partners and Resellers</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
        </div>
        <div className={`${styles.flex} ${styles.fullWidth} ${styles.bottomBar}`}>
          <FacebookIcon className={styles.logo} style={{ fontSize: 'large', margin: '0 12px', }} sx={{ '&:hover': { color: 'white', }, cursor: 'pointer', }} />
          <TwitterIcon className={styles.logo} style={{ fontSize: 'large', margin: '0 12px', }} sx={{ '&:hover': { color: 'white', }, cursor: 'pointer', }} />
          <LinkedInIcon className={styles.logo} style={{ fontSize: 'large', margin: '0 12px', }} sx={{ '&:hover': { color: 'white', }, cursor: 'pointer', }} />
          <YouTubeIcon className={styles.logo} style={{ fontSize: 'large', margin: '0 12px', }} sx={{ '&:hover': { color: 'white', }, cursor: 'pointer', }} />
          <InstagramIcon className={styles.logo} style={{ fontSize: 'large', margin: '0 12px', }} sx={{ '&:hover': { color: 'white', }, cursor: 'pointer', }} />
          <AudiotrackIcon className={styles.logo} style={{ fontSize: 'large', margin: '0 12px', }} sx={{ '&:hover': { color: 'white', }, cursor: 'pointer', }} />
          <LocalLibraryIcon className={styles.logo} style={{ fontSize: 'large', margin: '0 12px', }} sx={{ '&:hover': { color: 'white', }, cursor: 'pointer', }} />
          <RssFeedIcon className={styles.logo} style={{ fontSize: 'large', margin: '0 12px', }} sx={{ '&:hover': { color: 'white', }, cursor: 'pointer', }} />
          <PublicIcon style={{
            fontSize: 'x-large',
            margin: '0 12px',
            color: 'white',
            marginLeft: 'autO',
          }}
          />
          <span>Guatemala</span>
          <TranslateIcon style={{
            fontSize: 'x-large',
            margin: '0 12px',
            color: 'white',
            marginLeft: '50px',
          }}
          />
          <span>English</span>
        </div>
        <div className={`${styles.flex} ${styles.fullWidth} ${styles.spanRow}`}>
          <span>Privacy & Security</span>
          <span>Terms of Use</span>
          <span>Trademarks</span>
          <span>Legal</span>
          <span>Genuine Tools</span>
        </div>
        <div className={`${styles.flex} ${styles.fullWidth} ${styles.copyRight}`}>
          <span>Copyright © 2000-2023 JetBrains s.r.o.</span>
          <span className={styles.marginLeftAuto}>Developed with drive and IntelliJ IDEA</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
