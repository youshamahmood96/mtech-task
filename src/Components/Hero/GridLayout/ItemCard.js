import { useDispatch } from 'react-redux';

import { addToCart, decreaseOrder, increaseOrder } from '../../../Redux/Actions/cartActions';
import { CheckItemInCart, GetModalState } from '../../../Redux/Helpers/Helpers';
import './ItemCard.css'

const ItemCard = (props) => {
    const show = GetModalState()
    const { id, image, title, price } = props.item
    let quantity = CheckItemInCart(id)
    return (
        <div style={{ pointerEvents: show ? 'none' : 'auto' }} className="item-card"  >
            <div className="border-top item-image-holder">
                <img src={image} alt="" />
            </div>
            <div className="item-body border-bottom">
                <div className="item-text">
                    <h5>{title}</h5>
                    <p>$ {price}</p>
                </div>
                {
                    quantity ? <IncreaseOrder item={props.item} quantity={quantity} /> : <AddToCart item={props.item} />
                }
            </div>
        </div>
    );
};
const AddToCart = (props) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(addToCart(props.item))
    }
    return (
        <div onClick={handleClick} className="border-bottom item-body-interact add-to-cart" >Add to Cart</div>
    )
}
const IncreaseOrder = (props) => {
    const dispatch = useDispatch()
    const { item, quantity } = props
    const handleIncreaseOrder = () => {
        dispatch(increaseOrder(item))
    }
    const handleDecreaseOrder = () => {
        dispatch(decreaseOrder(item))
    }
    return (
        <div className="border-bottom item-body-interact" >
            <div className="increase-order-holder">
                <button onClick={handleDecreaseOrder} >-</button>
                {quantity}
                <button onClick={handleIncreaseOrder}>+</button>
            </div>
        </div>
    )
}

export default ItemCard;