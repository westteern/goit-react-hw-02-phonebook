import PropTypes from 'prop-types';
const DataItem = ({ id, name, number }) => {
    return (
        <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
        </li>
    );
};

DataItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default DataItem;