import PropTypes from 'prop-types'
import styles from './Info.module.css'

const Info = (props) => {
    return (
        <div className={styles.info}>
          <div className={styles.infoTotal}>
            <p>total list : {props.todos.length}</p>
          </div>

          <div className={styles.infoTotal}>
            <p>total counts : {props.totalCounts(props.todos)}</p>
          </div>

          <button className={styles.deleteAllButton} onClick={props.onClick}>
            delete all
          </button>
        </div>
    )
}
Info.propTypes = {
    todos : PropTypes.arrayOf(
      PropTypes.shape({
        title : PropTypes.string.isRequired,
        count : PropTypes.number.isRequired
      })
    ),
    totalCounts :PropTypes.func,
    onClick : PropTypes.func
}

export default Info