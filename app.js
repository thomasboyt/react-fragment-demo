import React from 'react-tools/build/npm-react';
import _ from 'lodash';

class Item extends React.Component {
  render() {
    return (
      <li>{this.props.children}</li>
    );
  }
}

class ListItems extends React.Component {
  render() {
    return (
      <frag>
        <Item>foo {this.props.num}</Item>
        <Item>bar {this.props.num}</Item>
        <button onClick={this.props.onRemove}>remove</button>
      </frag>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [1, 2, 3, 4, 5],
      next: 6
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
      <frag>
        <ul>
          {this.renderItems()}
        </ul>
        <button onClick={() => this.handleShuffle()}>
          Shuffle
        </button>
        <button onClick={() => this.handleAdd()}>
          Append to End
        </button>
      </frag>
    );
  }
}

React.render(<Main />, document.getElementById('container'));
