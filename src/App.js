import React, { Component } from 'react'
import PokemonContainer from './containers/PokemonContainer';
import './scss/main.scss';

import { connect } from 'react-redux'
import * as actions from './redux/actions'

class App extends Component {
  componentDidMount () {
    this.props.setTitle('Search Pokemon')
  }

  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <PokemonContainer />
      </div>
    )
  }
}

const mapStateToProps = ({ title }) => {
  return {
    title
  }
}

const VisibleApp = connect(
  mapStateToProps,
  actions
)(App)

export default VisibleApp
