import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../Context';
import {ButtonComponent} from './Button';
import {Link} from 'react-router-dom';


export default class Modal extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    return (
      <ProductConsumer>
        {
          (value)=>{
            const {modalOpen,closeModal}=value;
            const {id,img,title,price}=value.modalDetails;
            if(!modalOpen)
            {
              console.log('modalOPen: ',modalOpen)
              return null;
            }else{
            return( <ModalContainer>
                <div className="container">
                  <div className='row'>
                    <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize'>
                      <h3>item added to cart</h3>
                      <img src={img} alt={title} className='img-fluid'></img>
                      <h5>{title}</h5>
                      <h5 className='text-muted'>price:$ {price}</h5>
                        <Link to='/'>
                          <ButtonComponent onClick={()=>closeModal()}><h5>shoping</h5></ButtonComponent>
                        </Link>
                        <Link to='/cart'>
                          <ButtonComponent cart onClick={()=>closeModal()}><h5>go to cart</h5></ButtonComponent>
                        </Link>
                    </div>

                  </div>
                </div>
              </ModalContainer>)
            }

          }
        }
      </ProductConsumer>
    )
  }
}



const ModalContainer=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
  background:var(--mainWhite);
}


`
