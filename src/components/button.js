import React, { Component } from 'react';

class Foo extends Component {
    constructor(props) {
      super(props);
      this.goBack = this.goBack.bind(this);
      this.go = this.go.bind(this);
    }
    goBack() {
      console.log('Cliqué');
    }
    render() {
      return <button onClick={this.goBack}>Go back</button>;

      return <button onClick={this.go}>Go forward</button>;
    }
  }

export default Foo;
