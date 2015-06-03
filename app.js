import React from 'react-tools/build/npm-react';
import _ from 'lodash';

class ListItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [1, 2],
      next: 3
    };
  }

  handleAdd() {
    this.setState({
      list: this.state.list.concat(this.state.next),
      next: this.state.next + 1
    });
  }

  handleRemove(num) {
    this.setState({
      list: _.without(this.state.list, num)
    });
  }

  renderItems() {
    return this.state.list.map((item, idx) => {
      return (
        <li key={idx}>{this.props.num} {'->'} {item} <button onClick={() => this.handleRemove(item)}>-</button></li>
      );
    });
  }

  render() {
    return (
      <frag>
        {this.renderItems()}
        <li>
          <button onClick={() => this.handleAdd()}>+ add</button>
          <button onClick={this.props.onRemove}>remove all</button>
        </li>
      </frag>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [1, 2],
      next: 3,
      showThing: false
    };
  }

  handleRemove(num) {
    this.setState({
      list: _.without(this.state.list, num)
    });
  }

  handleShuffle() {
    this.setState({
      list: _.shuffle(this.state.list)
    });
  }

  handleAdd() {
    this.setState({
      list: this.state.list.concat(this.state.next),
      next: this.state.next + 1
    });
  }

  renderItems() {
    return this.state.list.map((num) => {
      return (
        <ListItems key={num} num={num}
          onRemove={() => this.handleRemove(num)} />
      );
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderItems()}
        </ul>
        {this.state.showThing && <p>hi</p>}
        <button onClick={() => this.handleShuffle()}>
          Shuffle
        </button>
        <button onClick={() => this.handleAdd()}>
          Append to End
        </button>
      </div>
    );
  }
}

React.render(<Main />, document.getElementById('container'));
