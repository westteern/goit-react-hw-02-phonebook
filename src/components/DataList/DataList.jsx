import PropTypes from 'prop-types';
import DataItem from 'components/DataItem';

const DataList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
        <DataItem
            key={id}
            name={name}
            number={number}
        />
    ))}
  </ul>
);

DataList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default DataList;