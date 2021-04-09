import React,{ useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import ItemCard from './ItemCard';
import { getItems } from '../../../Api/ApiCalls';
import './GridLayout.css'

const GridLayout = () => {
    const [items, setItems] = useState()
    useEffect(() => {
        getItems()
            .then(res => {
                setItems(res)
            })
    }, [])
    return (
        <div className="grid-layout" >
            {
                items ? (
                    <div className="wrapper"  >
                        {items.data.map(item => (<ItemCard key={item.id} item={item} />))}
                    </div>
                ) : (
                    <Loader className="loader"
                        type="Puff"
                        color="#00BFFF"
                        height={200}
                        width={200}
                    />
                )
            }
        </div>
    );
};

export default React.memo(GridLayout);