import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNodes } from '../actions/nodes';
import getRandomColour from '../helpers/get-random-colour';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Node from '../containers/Node';
import Logger from '../components/Logger';
import './App.css';

class App extends Component {
  static propTypes = {
    getNodes: PropTypes.func.isRequired,

    nodes: PropTypes.object.isRequired,
    logs: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getNodes();
  }

  render() {
    const nodes = this.props.nodes.toJS();
    const error = nodes.error;
    const items = nodes.items;

    const logs = this.props.logs.toJS().items;

    if (error) {
      return <Error />
    }

    if (!items.length) {
      return <Loading />
    }

    return (
      <div>
        {items.map((node, i) => {
          node.colour = getRandomColour();

          return (
            <Node
              key={i}
              node={node}
            />
          );
        })}

        <Logger
          logs={logs}
        />
      </div>
    );
  }
}

export default connect((state) => ({
  nodes: state.nodes,
  logs: state.logs,
}), {
  getNodes,
})(App);