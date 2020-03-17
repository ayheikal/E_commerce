import React from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../Context'
class ProductList extends React.Component{


  render(){
  //  console.log(this.state.products)
    return(
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products"></Title>
            <div className='row'>
              <ProductConsumer>
                {(mo)=>{
                    return ( mo.products.map(product=>{
                      return <Product key={product.id}  product={product}/>
                    }));
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default ProductList;
