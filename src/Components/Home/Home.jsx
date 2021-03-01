import React, { useEffect } from "react";
import { Product } from "../Product/Product";
import "./Home.css"
import { useFetch } from "../../Hooks/useFetch"
import {useDispatch, useSelector} from "react-redux"
import { getProducts } from "../../Redux/actions/productActions";

export const Home = () => {
    //const {loading, data, error} = useFetch(`http://localhost:4000/api/products`)

    const dispatch = useDispatch()

    const listProducts = useSelector(state => state.products)
    const {products, loading, error} = listProducts

    useEffect(() => {

        dispatch(getProducts())
    }, [dispatch])

    return (
        <div>
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