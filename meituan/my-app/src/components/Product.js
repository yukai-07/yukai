import React,{Component} from 'react';
import './../asset/css/product.css';
import { withRouter } from 'react-router-dom';
export default withRouter(class Product extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="pro-container" onClick={
                ()=>{
                    console.log(this.props);
                    this.props.history.push('/detail/'+this.props.elem.product_name);
                }
            }>
                <img className="pro-img" src={this.props.elem.img} alt=""/>
                <div className="pro-content">
                    <div className="pro-title">{this.props.elem.product_name}</div>
                    <p className="pro-detail">{this.props.elem.description}</p>
                    <div>
                        <span className="pro-current-price">{this.props.elem.discount_price}</span>
                        <span className="pro-door-price">门市价 {this.props.elem.price}</span>
                        <span className="pro-sold">已售{this.props.elem.num}</span>
                    </div>
                </div>
            </div>
        )
    }
})