import { useState } from "react";
import { Notify } from "notiflix";
import { Header, SearchForm, SearchFormButton, SearchFormInput, SearchFormSpan} from './SearchBar.styled';
import { PropTypes } from 'prop-types';
import { TfiSearch } from "react-icons/tfi";

export const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newSearchQuery = searchQuery.trim().toLowerCase();
    if (!newSearchQuery) {
        Notify.failure("Please enter search query");
        return
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };
    return (
      <Header>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <TfiSearch fill="#3f4145"/>
            <SearchFormSpan>Search</SearchFormSpan>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={handleChange}
          />
        </SearchForm>
      </Header>
    );
  }

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
