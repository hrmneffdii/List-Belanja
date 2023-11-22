import PropTypes from 'prop-types'
import styles from './Todos.module.css'
import plusIcon from '../../assets/plus-icon.svg'
import minusIcon from '../../assets/minus-icon.svg'

const Todos = ({todos, kurang, tambah}) => {
    return (
      <div className={styles.todos}>
      {todos.map((todo, index) => {
        return (
        <div key={index} className={`todo ${(index + 1) != todos.length ? styles.todoDivider : ''}`}>
          {todo.title}
          <div className={styles.todoIconWrapper}>
            <div className={styles.todoCount}>{todo.count}</div>
            <button onClick={() => kurang(index)} className={styles.todoActionButton}>
              <img src={minusIcon} alt="minus icon" />
            </button>
            <button onClick={() => tambah(index)} className={styles.todoActionButton}>
            <img src={plusIcon} alt="plus icon" />
            </button>
          </div>
        </div> 
        )
      })}
      </div>
    )
}

Todos.propTypes = {
    todos : PropTypes.arrayOf(
      PropTypes.shape({
        title : PropTypes.string.isRequired,
        count : PropTypes.number.isRequired
      })
    ),
    kurang : PropTypes.func,
    tambah : PropTypes.func

}

export default Todos
