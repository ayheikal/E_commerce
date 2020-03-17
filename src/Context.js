import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'

const ProductContext=React.createContext();
//Provider
//consumer

export default class ProductProvider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products:[],
      detailProduct:detailProduct,

    }
  }
  getItem=(id)=>{
    const product=this.state.products.find(item=>item.id===id);
    return product;
  }

  componentDidMount(){
    this.setProducts();
  }

  setProducts=()=>{
    let tempProducts=[];
    storeProducts.forEach(item=>{
      const singleItem={...item};
      console.log(singleItem)
      tempProducts=[...tempProducts,singleItem]
    });
    this.setState(()=>{
      return{products:tempProducts}
    });
  }

  handleDetail=(id)=>{
    const product=this.getItem(id);
    this.setState(()={
      return {detailProduct:product}
    })
  }
  addToCart=(id)=>{
    console.log('add to cart',id);
  }

  render () {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart,
      }}>

        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer=ProductContext.Consumer;

export{ProductProvider,ProductConsumer};
