import { Component } from 'react';
import { Notify } from "notiflix";
import { Header, SearchForm, SearchFormButton, SearchFormInput, SearchFormSpan} from './SearchBar.styled';
import { PropTypes } from 'prop-types';
import { TfiSearch } from "react-icons/tfi";

export class SearchBar extends Component {
  state = {
    searchQuery: ""
  };
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchQuery: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = this.state.searchQuery.trim().toLowerCase();
    if (!searchQuery) {
        Notify.failure("Please enter search query");
        return
    }
    this.props.onSubmit(searchQuery);
    this.setState({
      searchQuery: ""
    })
  };
  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <TfiSearch fill="#3f4145"/>
            <SearchFormSpan>Search</SearchFormSpan>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
