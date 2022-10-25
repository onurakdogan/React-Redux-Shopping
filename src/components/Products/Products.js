
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {getProducts,addProduct,removeProduct,updateProduct,decrementProduct} from '../.././store/actions/Products/Products';

import HeaderNav from '../HeaderNav/HeaderNav';

import {Card,Button} from 'react-bootstrap';

function SortProduct(props) {
 
  const {products,isLoading} = props.CountriesToProps ;  
 
  useEffect(()=>{
    props.getProducts();
  },[])
 
  return (
    <>
      <HeaderNav/>
     
      <div className="d-flex justify-content-center col-md-12 h-100vh">
                    
                    {isLoading ? 
                      "LOADING ..."
                      :
                      products.map((item,index) => (
                      <>
                        <Card key={index} style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/89f96a84-f209-4559-b9da-28a153a85f2d/air-force-1-shadow-ayakkab%C4%B1s%C4%B1-lW4FDD.png" />
                          <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                              {item.price}$
                            </Card.Text>
                            <Button onClick={()=>{props.addProduct(item)}} variant="primary">ADD TO CART</Button>
                          </Card.Body>
                        </Card>
                      </>
                      ) 
                      )
                    }     
            
    
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({ 
  CountriesToProps: state.ProductsReducer
});
  

export default connect(mapStateToProps,{getProducts,addProduct,removeProduct,updateProduct,decrementProduct})(SortProduct)
