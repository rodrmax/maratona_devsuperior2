import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import StepsHeader from './StepsHeader'
import ProductsList from './ProductsList'
import { OrderLocationData, Product } from './types'
import { fetchProducts, saveOrder } from '../Service/api'
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';
import './styles.css';

function Order() {

    const [products, setProducts] = useState<Product[]>([])
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
    const [orderLocation, setorderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price
    }, 0)

    useEffect(() => {
        fetchProducts()
            .then(resp => setProducts(resp.data))
            .catch(() => {
                toast.warning('Erro ao listar produtos');
            })
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product)

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
        saveOrder(payload).then((response) => {
          toast.error(`Pedido enviado com sucesso! - Ordem ${response.data.id}`);
          setSelectedProducts([]);
        })
          .catch((error) => {
            toast.warning(`Erro ao enviar pedido - ${error}`);
          })
      }
      

    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                <OrderLocation onChangeLocation={location => setorderLocation(location)} />
                <OrderSummary 
                    amount={selectedProducts.length} 
                    totalPrice={totalPrice} 
                    onSubmit={handleSubmit}/>
            </div>
            <Footer />
        </>
    )
}

export default Order;