import {connect} from 'react-redux';
import {getProducts,addProduct,removeProduct,updateProduct,decrementProduct} from '../../store/actions/Products/Products';

import {Card,Button} from 'react-bootstrap';
import HeaderNav from '../HeaderNav/HeaderNav';

function SortProduct(props) {
 
  const {cart} = props.CountriesToProps ;  
 
  return (
       <>
       <HeaderNav/>
       <div className="d-flex justify-content-center align-items-center col-md-12 h-100vh">
       {
        cart.map((item,index) => (

                <Card key={index} style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/89f96a84-f209-4559-b9da-28a153a85f2d/air-force-1-shadow-ayakkab%C4%B1s%C4%B1-lW4FDD.png" />
                          <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                              {(item.price * item.qty).toFixed(2)}$
                            </Card.Text>
                             
                            <div className="d-flex  align-items-center justify-content-between w-100  ">  
                              <Button className="btn-lg" onClick={()=>{props.updateProduct(item)}} variant="primary">+</Button>
                              <h5>{item.qty}</h5>    
                              <Button className="btn-lg" onClick={()=>{props.decrementProduct(item)}} variant="danger">-</Button>
                            </div>

                            <div className="d-flex  align-items-center mt-3" style={{background:"red"}}> 
                              <Button className="btn-lg btn-block" onClick={()=>{props.removeProduct(item)}} variant="danger">Remove</Button>
                            </div>
                          </Card.Body>
                 </Card>

        ))
    
       }
        </div>
        </>
  );
}

const mapStateToProps = (state) => ({ 
  CountriesToProps: state.ProductsReducer
});

export default connect(mapStateToProps,{getProducts,addProduct,removeProduct,updateProduct,decrementProduct})(SortProduct);