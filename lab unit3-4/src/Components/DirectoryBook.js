import React, { Component } from 'react';
import Nav from './Nav'
import data from './data'
import InfoCards from './InfoCards'
console.log(data)

export default class DirectoyBooks extends Component {
  constructor() {
    super();
    this.state = {
      info: data,
      index: 0,
    }
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }
  increase() {
    if (this.state.index < this.state.info.length - 1) {
      this.setState({ index: this.state.index + 1 })
    }
  }
  decrease() {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 })
    }
  }
  render() {
    console.log(this.state.info)
    return (
      <section className='Carddisplay'>
        <InfoCards info={data} index={this.state.index} />
        <Nav increase={this.increase} decrease={this.decrease} />

      </section>
    )
  }
}