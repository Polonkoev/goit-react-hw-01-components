import PropTypes from 'prop-types';
import css from './Statistics.module.css'

function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}

export const Statistics = ({stats, title}) => {
  return (
    
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => (
            
          <li key={id} className={css.item} style={{backgroundColor:generateColor()}}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};




Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};