import React, { useEffect, useState } from "react";
import { Product } from "../Product/Product";
import "./Home.css"
import {useDispatch, useSelector} from "react-redux"
import { getProducts } from "../../Redux/actions/productActions";

export const Home = () => {

    const dispatch = useDispatch()

    const listProducts = useSelector(state => state.products)
    const {products, loading, error} = listProducts

    const [sort, setSort] = useState("")

    const handleChange = (e) => {

        setSort(e.target.value);

        if(sort === "low") {
            products.sort((a, b) => b.price - a.price)
        }

        else if(sort === "high") {
            products.sort((a, b) => a.price - b.price)
        }

    }


    useEffect(() => {

        dispatch(getProducts())
    }, [dispatch])

    return (
        <div>
            <select value = {sort} onChange = {(e) => handleChange(e)}  >
                    <option value = "">Sort By:</option>
                    <option value = "low">Price low to high</option>
                    <option value = "high">Price high to low</option>
                </select>
            <div className = "container123">
                {
                    loading ? <h1> Loading! </h1> : error ? <h2>Error!</h2> : products.map((item) => (
                        <div key = {item._id} className = "home">
                            <div className = "products">
                                <Product item = {item} />
                            </div>
                        </div>))
                }
            </div>
        </div>
    )
}