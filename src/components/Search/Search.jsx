import { useState } from 'react';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { Form, Input, Button, SearchIcon } from './Search.styled';

const Search = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = value.trim();

    if (searchValue === '') {
      toast.error(
        'The search field cannot be empty. Please enter a query and try again.'
      );
      return;
    }

    onSubmit(searchValue);
    // setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="search"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Enter movie title"
        value={value}
        onChange={handleChange}
      />

      <Button type="submit" aria-label="Search">
        Search {<SearchIcon />}
      </Button>
    </Form>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
