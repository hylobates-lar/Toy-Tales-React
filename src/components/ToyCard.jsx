import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={() => this.props.addLike(this.props.toy.id)}>Like {'<3'}</button>
        <button className="del-btn" onClick={() => this.props.donate(this.props.toy.id)}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
