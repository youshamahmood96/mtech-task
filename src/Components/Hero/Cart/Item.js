import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeQuantity, removeItem } from '../../../Redux/Actions/cartActions';
import { SubTotalCalculator } from '../../../Redux/Helpers/Helpers';
import './Item.css'

const Item = (props) => {
    const {id,title,image,price,quantity} = props.item
    const [value,setValue] = useState(quantity)
    const dispatch = useDispatch()
    const handleChange = e =>{
        if(e.target.value>0){
            let content = {id,value:e.target.value}
            dispatch(changeQuantity(content))
        }
    }
    const handleRemoveItem = () =>{
        dispatch(removeItem(id))
    }
    useEffect(()=>{
        setValue(quantity)
    },[quantity])
    const subTotal = SubTotalCalculator(price,quantity) 
    return (
        <div className="grid-container" >
            <img className="entity2" src={image} alt=""/>
            <h6 className="entity1" > <button onClick={handleRemoveItem} >X</button> {title}</h6>
            <div className="entity3">
            <p> $ {price} X </p>
            <input type="number" min="1" name="quantity" onChange={handleChange} value={value} id="quantity"/>
            <p style={{width:'100px'}} > &nbsp; = $ {subTotal}</p>
            </div>
            
        </div>
    );
};

export default Item;