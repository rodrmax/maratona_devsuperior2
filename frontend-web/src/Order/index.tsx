import { useEffect, useState } from 'react';
import './styles.css';
import StepsHeader from './StepsHeader'
import ProductsList from './ProductsList'
import { OrderLocationData, Product} from './types'
import { fetchProducts } from '../Service/api'
import OrderLocation from './OrderLocation';


function Order(){

    const [products, setProducts] = useState<Product[]>([])
    const [orderLocation, setorderLocation] = useState<OrderLocationData>();

    useEffect(() => {
        fetchProducts()
            .then(resp => setProducts(resp.data))
            .catch(error => console.log(error))
    }, []);

    return(
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList products={ products }  />
                <OrderLocation onChangeLocation={location => setorderLocation(location)}/>
            </div>
        </>
    )
}

export default Order;