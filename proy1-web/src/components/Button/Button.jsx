import PropTypes from 'prop-types'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import * as styles from './Button.module.css'

function Button({
  text,
  color,
  fontColor,
  borderColor,
  fontWeight,
  padding,
  margin,
  icon,
},) {
  return (
    <button
      type="button"
      className={
        `${styles.button}`
      }
      style={{
        backgroundColor: `${color}`,
        color: `${fontColor}`,
        borderColor: `${borderColor}`,
        fontWeight: `${fontWeight}`,
        padding: `${padding}`,
        margin,
      }}
    >
      {
        icon && <PlayArrowIcon style={{ fontSize: 'medium', }} />
      }
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
}
Button.defaultProps = {
  text: '',
}

Button.propTypes = {
  color: PropTypes.string,
}
Button.defaultProps = {
  color: '',
}

Button.propTypes = {
  fontColor: PropTypes.string,
}
Button.defaultProps = {
  fontColor: 'rgba(0, 0, 0, 0.753)',
}

Button.propTypes = {
  borderColor: PropTypes.string,
}
Button.defaultProps = {
  borderColor: '1px solid rgba(0, 0, 0, 0.308)',
}

Button.propTypes = {
  fontWeight: PropTypes.string,
}
Button.defaultProps = {
  fontWeight: 'lighter',
}

Button.propTypes = {
  padding: PropTypes.string,
}
Button.defaultProps = {
  padding: '8px 15px',
}

Button.propTypes = {
  margin: PropTypes.string,
}
Button.defaultProps = {
  margin: 'auto 5px',
}

Button.propTypes = {
  icon: PropTypes.bool,
}
Button.defaultProps = {
  icon: false,
}

export default Button
