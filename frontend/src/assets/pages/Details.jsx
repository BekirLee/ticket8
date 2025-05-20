import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { fetchProducts } from '../features/Products';
import { addBasket } from '../features/Basket';

const Details = () => {
    const products = useSelector(state => state.products.products)
    const { id } = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


    const findedProduct = products.find((item) => item._id == id)
    console.log(findedProduct);


    return (
        <div>
            <img src={findedProduct?.image} alt="" />
            <p>{findedProduct?.name}</p>
            <p>{findedProduct?.price}</p>
            <div
                className="btn btnAddBasket"
                onClick={() => {
                    dispatch(addBasket(findedProduct));
                }}
            >
                Add basket
            </div>
        </div>
    )
}

export default Details
