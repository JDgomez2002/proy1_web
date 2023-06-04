import Button from '../../components'
import * as styles from './Body.module.css'

function Body() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {/* First group */}
        <div className={`${styles.flex} ${styles.marginBottom}`}>
          <span className={styles.textColumn}>
            <h1>Intelligent query console</h1>
            <p>
              Allows you to execute queries in different modes and
              provides a local history that keeps track of all your
              activity and protects you from losing your work.
            </p>
            <h1>Efficient schema navigation</h1>
            <p>
              Lets you jump to any table, view, or procedure
              by its name via the corresponding action, or
              directly from its usages in the SQL code.
            </p>
            <h1>Explain plan</h1>
            <p>
              Gives you an extended insight into how your queries
              work and into the database engine behavior, so you
              can make your queries more efficient.
            </p>
          </span>
          <div className={styles.grid}>
            <div className={`${styles.imageContainer} ${styles.smallImage}`}>
              <img
                alt="firstScreenshoot"
                className={styles.image}
                src="https://github.com/JDgomez2002/proy1_web/blob/main/proy1-web/src/assets/img/01.png?raw=true"
              />
            </div>
            <div className={styles.imageContainer}>
              <img
                alt="firstScreenshoot"
                className={styles.image}
                src="https://github.com/JDgomez2002/proy1_web/blob/main/proy1-web/src/assets/img/02.png?raw=true"
              />
            </div>
          </div>
        </div>
        {/* Second group */}
        <div className={`${styles.flex} ${styles.marginBottom}`}>
          <div className={styles.grid}>
            <div className={`${styles.imageContainer} ${styles.smallImage}`}>
              <img
                alt="firstScreenshoot"
                className={styles.image}
                src="https://github.com/JDgomez2002/proy1_web/blob/main/proy1-web/src/assets/img/03.png?raw=true"
              />
            </div>
            <div className={styles.imageContainer}>
              <img
                alt="firstScreenshoot"
                className={styles.image}
                src="https://github.com/JDgomez2002/proy1_web/blob/main/proy1-web/src/assets/img/04.png?raw=true"
              />
            </div>
          </div>
          <span className={styles.textColumn}>
            <h1>Smart code completion</h1>
            <p>
              DataGrip provides context-sensitive code completion,
              helping you to write SQL code faster. Completion is
              aware of the tables structure, foreign keys, and even
              database objects created in code you are editing.
            </p>
            <h1>On-the-fly analysis and quick-fixes</h1>
            <p>
              DataGrip detects probable bugs in your code and
              suggests the best options to fix them on the fly.
              It will immediately let you know about unresolved
              objects, using keywords as identifiers and always
              offers a way to fix the problems.
            </p>
          </span>
        </div>
        {/* Third group */}
        <div className={`${styles.flex} ${styles.marginBottom}`}>
          <span className={styles.textColumn}>
            <h1>Refactorings that work in SQL files and schemas</h1>
            <p>
              DataGrip correctly resolves all references in your
              SQL code and helps you refactor them. When you rename
              a variable or an alias, it will update their usages
              throughout the entire file. The actual table names in
              the database are updated when you rename references
              to them from your queries. There is even a preview of
              usages of tables/views inside other views, stored
              procedures and functions.
            </p>
            <h1>Version control integration</h1>
            <p>
              We provide unified support for all major version
              control systems: Git, SVN, Mercurial and many others.
            </p>
            <Button
              text="Discover all features"
              color="#323236"
              fontColor="white"
              borderColor="rgb(212, 212, 212)"
              fontWeight="normal"
              padding="15px 35px"
            />
          </span>
          <div className={styles.grid}>
            <div className={`${styles.imageContainer} ${styles.smallImage}`}>
              <img
                alt="firstScreenshoot"
                className={styles.image}
                style={{ height: '350px', width: 'auto', margin: '0 50px', }}
                src="https://github.com/JDgomez2002/proy1_web/blob/main/proy1-web/src/assets/img/05.png?raw=true"
              />
            </div>
            <div className={styles.imageContainer}>
              <img
                alt="firstScreenshoot"
                className={styles.image}
                style={{ height: '300px', width: 'auto', margin: '0 50px', }}
                src="https://github.com/JDgomez2002/proy1_web/blob/main/proy1-web/src/assets/img/06.png?raw=true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
