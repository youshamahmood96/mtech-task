import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import ItemCard from './ItemCard';
import './GridLayout.css'
import { LoadItems } from '../../../Api/Queries';



const GridLayout = () => {
    const {isLoading,data} = LoadItems()
    return (
        <div className="grid-layout" >
            {
                !isLoading ? (
                    <div className="wrapper"  >
                        {data.data.map(item => (<ItemCard key={item.id} item={item} />))}
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