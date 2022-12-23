import React, { Component } from "react";

export default class GlassItems extends Component {
  handleDetail = () => {
    this.props.getDetail(this.props.glasses);
  };

  render() {
    const { glasses } = this.props;
    return (
      <div className="col-md-4 mt-4">
        <div className="card">
          <img className="card-img-top" src={glasses.url} alt="test" width="50"/>
          <div className="card-body">
            <h4 className="card-title">{glasses.name}</h4>
            <p className="card-text">{glasses.price}$</p>
            <button className="btn btn-info" onClick={this.handleDetail}>
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}