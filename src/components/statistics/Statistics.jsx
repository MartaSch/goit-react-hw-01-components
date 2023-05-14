import PropTypes from 'prop-types';
import css from './Statistics.module.css'

function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>

  <ul className={css.statList}>
 {stats.map(stat => (
    <li 
    key = {stat.id} 
    className = {css.item}
    style={{ backgroundColor: randomHexColor() }}>
        <span className = {css.label}>{stat.label}</span>
        <span className = {css.percentage}>{stat.percentage}%</span>
    </li>
 ))}
  </ul>
</section>
    )
};
Statistics.propTypes = {
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default Statistics;