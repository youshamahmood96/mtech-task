
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../Redux/Actions/cartActions';
import { toggleModal } from '../../../Redux/Actions/modalActions';
import { GetCheckOutModalState, LoadCart } from '../../../Redux/Helpers/Helpers';
import './Cart.css'
import CartSummary from './CartSummary';
import Item from './Item';

const Cart = ({show}) => {
    const dispatch = useDispatch()
    const showCheckout = GetCheckOutModalState()
    const handleModalToggle = () => {
       dispatch(toggleModal())
    }
    const cart = LoadCart()
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div style={{
            opacity:show?'1':0,zIndex:show?'10':'-1',
            transform:show?'translate(0vh)':'translate(100vh)',
            pointerEvents: showCheckout ? 'none' : 'auto'
        }} 
        className="modal-wrapper">
            <div className="modal-header">
                <h1>Cart</h1>
                <span onClick={handleModalToggle} >x</span>
            </div>
            <div className="modal-content">
                {cart.length?
                    <div>
                        <button onClick={handleClearCart} >Clear Cart</button>
                        {cart.map((item,index)=><Item key={index} item={item} />)}
                        <CartSummary/>
                    </div>:null
                }
            </div>
        </div>
    );
};

export default Cart;