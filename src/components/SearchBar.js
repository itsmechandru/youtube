import React from 'react';

class SearchBar extends React.Component {

  state = {
    term:''
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return(
      <div className={'search-bar ui-segment'} style={{marginBottom: '10px'}}>
        <form onSubmit={this.onFormSubmit} className={'ui form'}>
          <div className={'field'}>
            <label>Video search</label>
            <input type={'text'}
                   value={this.state.term}
                   onChange={e=> this.setState({term: e.target.value})}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
