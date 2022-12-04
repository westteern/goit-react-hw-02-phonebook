import PropTypes from 'prop-types';

const DataItem = ({id, name, number, onDelContact }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelContact(id)}>Delete</button>
    </li>
  );
};

DataItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelContact: PropTypes.func.isRequired,
};

export default DataItem;
