import Autosuggest from 'react-autosuggest';
import React from 'react';

// Imagine you have a list of languages that you'd like to autosuggest.
const persons = [
  {
    name: 'John doe',
    id: 197258287173183,
  },
  {
    name: 'Phil',
    id: 20656858642812,
  },
  {
    name: 'Patrick',
    id: 20656875862812,
  },
  {
    name: 'Terrance',
    id: 20656858642402,
  },
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : persons.filter(lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue);
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => <div data-id={suggestion.id}>{suggestion.name}</div>;

class testAutocomplete extends React.Component {
  // Autosuggest is a controlled component.
  // This means that you need to provide an input value
  // and an onChange handler that updates this value (see below).
  // Suggestions also need to be provided to the Autosuggest,
  // and they are initially empty because the Autosuggest is closed.
  state = {
    value: '',
    suggestions: persons,
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
      id: 'oui',
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    this.setState({
      donation: {
        beneficiary: suggestion.id,
      },
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange,
      'data-beneficiary-id': value,
    };

    // Finally, render it!
    return (
      <>
        <p>Coucou</p>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </>
    );
  }
}

export default testAutocomplete;
