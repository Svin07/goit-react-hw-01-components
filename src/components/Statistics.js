import PropTypes from 'prop-types';

export default function Statistics({title, stats}){

    return (
        <section className="statistics">
          {title && <h2 className="title">{title}</h2>}
  

  <ul className="stat-list">
    {stats.map(stat => (
      <li key={stat.id} className="item">
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
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