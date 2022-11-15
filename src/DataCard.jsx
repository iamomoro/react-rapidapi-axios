import React, { Component } from 'react';

class CharacterCard extends Component {
  render() {
    return (
      <>
        <tr>
          <td>{this.props.obj.name}</td>
          <td>{this.props.obj.postal}</td>
          <td>{this.props.obj.capital.name}</td>
          <td>{this.props.obj.population.total}</td>
        </tr>
      </>
    );
  }
}

export default CharacterCard;
