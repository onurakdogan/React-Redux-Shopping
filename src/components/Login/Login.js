
 
import {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getProducts,addProduct,removeProduct,updateProduct,decrementProduct} from '../../store/actions/Products/Products';
 
import { Button,Row,Form,Col } from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom';

function Login(props) {

  const navigate = useNavigate();
  const [form,setForm] = useState({email:"",password:""});
  const [errorMessage,setErrorMessage] = useState("");
 
  const handleChange = e => {
    setForm({...form,[e.target.name]:e.target.value});
  }
 
  const isEmail = (val) => {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(val)){
       setErrorMessage("Please enter a valid mail !");
    }else{
       navigate('/Products');
    }
}

  return (
    <div className="d-flex justify-content-center align-items-center col-md-12 h-100vh" style={{height:"100vh"}}>
     
      <Form >
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="12">
          Email
        </Form.Label>
        <Col sm="12">
          <Form.Control  value={form.email} name="email" onChange={handleChange} placeholder="example@gmail.com" />
        </Col>
      </Form.Group>
        
         
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="12">
            Password
            </Form.Label>
            <Col sm="12">
            <Form.Control value={form.password} name="password" onChange={handleChange} placeholder="Password" />
            </Col>
        </Form.Group>

        <Button onClick={()=>(isEmail(form.email))} > Login </Button>
        <p>{errorMessage}</p>
    </Form>
        
    </div>
  );
}

const mapStateToProps = (state) => ({ 
  CountriesToProps: state.ProductsReducer
}); 

export default connect(mapStateToProps,{getProducts,addProduct,removeProduct,updateProduct,decrementProduct})(Login);