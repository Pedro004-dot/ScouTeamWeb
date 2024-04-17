import "./SearchUsers.scss"

import PropTypes from 'prop-types';

SearchUsers.propTypes = {
    setSearchInput: PropTypes.func,
    setIsOpen : PropTypes.func,
};
export default function SearchUsers({setSearchInput, setIsOpen}) {

  const handleInputChange = (event) => {
    const value = event.target.value;
    setIsOpen(value.length > 0);
    setSearchInput(value)
};

  return (
    <div className="input-search">
    <input
        className="search"
        placeholder="Pesquisar"
        onChange={handleInputChange}
    />
    
</div>
  );
}
