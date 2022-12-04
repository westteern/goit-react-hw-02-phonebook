import PropTypes from 'prop-types';
import DataItem from 'components/DataItem';

const DataList = ({ contacts, onDelContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
        <DataItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelContact={()=> onDelContact(id)}
        />
    ))}
  </ul>
);

DataList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default DataList;