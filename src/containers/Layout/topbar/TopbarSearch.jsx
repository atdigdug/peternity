import React, { PureComponent } from 'react';
import SearchIcon from 'mdi-react/SearchIcon';
import Autocomplete from 'react-autocomplete';

export default class TopbarSearch extends PureComponent {
  constructor() {
    super();
    this.state = { inputOpen: true };
  }

  onInputOpen = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ inputOpen: !prevState.inputOpen }));
  };

  render() {
    return (
      <div>
        <br />
        <form className="topbar__search" action="/searchresults">
          <Autocomplete
            items={[
              { id: 'foo', label: 'invoice template' },
              { id: 'bar', label: 'involvement' },
              { id: 'baz', label: 'invite' },
            ]}
            shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.label}
            renderItem={(item, highlighted) => (
              <div key={item.id} style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}>
                {item.label}
              </div>
            )}
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            onSelect={value => this.setState({ value })}
          />
          <SearchIcon />
        </form>
      </div>
    );
  }
}
