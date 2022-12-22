import React, { Component } from 'react'
import GlassItems from "./glassItems";
import data from "./dataGlasses.json";

export default class BaiTap2 extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          listGlasses: data,
          detail: data[0],
        };
      }

    handelDetail = (glasses) => {
        this.setState({
          detail: glasses,
        });
      };
  
   renderGlasses = () => {
    const { listGlasses } = this.state;
    return listGlasses.map((item) => {
      return (
        <GlassItems key={item.id} glasses={item} getDetail={this.handelDetail} />
      );
    });
  };
  render() {
    return (
      <div>
        <div className="col-8">
              <div className="row">{this.renderGlasses()}</div>
            </div>
      </div>
    )
  }
}
