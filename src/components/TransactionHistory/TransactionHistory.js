import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export default function Transaction({ items }) {

    return(
        <table className={css.table}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    
{items.map(item => (
<tr key={item.id}>
    <td>{item.type}</td>
    <td>{item.amount}</td>
    <td>{item.currency}</td>
    </tr>)
    )
    }
      
    
  </tbody>
</table>
    )
    }

    Transaction.propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired,),
    }

    // {
    //     "id": "1e0700a2-5183-4291-85cc-2065a036a683",
    //     "type": "invoice",
    //     "amount": "964.82",
    //     "currency": "LRD"
    //   }