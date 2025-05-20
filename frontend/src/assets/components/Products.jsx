import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, searchProduct, sortAZ, sortZA } from "../features/Products";
import Product from "./Product";
import './product.css'

const Products = () => {
  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const [search, setSearch] = useState('');
  let handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value);
    dispatch(searchProduct(value))
  }
  return <>
    <input type="text" onChange={handleSearch} />
    <button onClick={() => dispatch(sortAZ())}>sortAZ</button>
    <button onClick={() => dispatch(sortZA())}>sortZA</button>
    <div className="box">
      {
        products.map((item) =>
          <Product product={item} key={item._id} />)}
    </div>
  </>;
};

export default Products;
