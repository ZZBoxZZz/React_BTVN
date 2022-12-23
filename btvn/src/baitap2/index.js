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
        console.log(glasses);
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
    const {detail} = this.state;
    return (
      <div className='container d-flex'>
        <div className="col-md-6">
              <div className="row">{this.renderGlasses()}</div>
        </div>
        <div className="col-md-6 model">
              {/* <img src='./glassesImage/model.jpg' className="img-fluid mt-4" height="500"/> */}
              <div class="vglasses__model" ><img src= {detail.url}/></div>
              <div id="glassesInfo" className="vglasses__info">
                <p className='text-danger'>${detail.price}</p>
                <p>{detail.desc}</p>
                 </div>
        </div>
      </div>
    )
  }
}
