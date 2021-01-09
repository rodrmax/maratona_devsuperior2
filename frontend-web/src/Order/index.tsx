import { useEffect, useState } from 'react';
import './styles.css';
import StepsHeader from './StepsHeader'
import ProductsList from './ProductsList'
import { Product} from './types'
import { fetchProducts } from '../Service/api'


function Order(){

    const [products, setProducts] = useState<Product[]>([])

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
            </div>
        </>
    )
}

export default Order;