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
      cart:[],
      modalOpen:false,
      modalDetails:detailProduct,


    }
  }

  openModal=(id)=>{
    const product=this.getItem(id);
    this.setState(()=>{
      return{modalDetails:product,modalOpen:true}
    })
  }
  closeModal=()=>{
    this.setState(()=>{
      return {modalOpen:false}
    });
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
      tempProducts=[...tempProducts,singleItem]
    });
    this.setState(()=>{
      return{products:tempProducts}
    });
  }

  handleDetail=(id)=>{
    const product=this.getItem(id);
    this.setState(()=>{
      return {detailProduct:product}
    })
  }
  addToCart=(id)=>{
    let tempProducts=[...this.state.products];
    const index=tempProducts.indexOf(this.getItem(id));
    const product=tempProducts[index];
    product.inCart=true;
    product.count++;
    const price=product.price;
    product.total+=price;

    this.setState(()=>{
      return {products:tempProducts,cart:[...this.state.cart,product]};},
      ()=>{
        console.log('welcom:',this.state)
      }
    );
  }

  render () {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart,
        openModal:this.openModal,
        closeModal:this.closeModal,
      }}>

        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer=ProductContext.Consumer;

export{ProductProvider,ProductConsumer};
