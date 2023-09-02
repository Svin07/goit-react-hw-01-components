import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export default function Statistics({title, stats}){

    return (
        <section className="statistics">
          {title && <h2 className="title">{title}</h2>}
  

  <ul className={css.statlist}>
    {stats.map(stat => (
      <li key={stat.id} className={css.item}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}</span>
    </li>
    ))}
    
  </ul>
</section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),).isRequired,

}

/* <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li> */