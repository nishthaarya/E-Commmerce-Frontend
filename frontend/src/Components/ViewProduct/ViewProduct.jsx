import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewProduct.css"
import {useFetch} from "../../Hooks/useFetch"
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../Redux/actions/productActions";
import { addToCart } from "../../Redux/actions/cartActions";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa"

export const ViewProduct = ({match, history}) => {

    let {id} = useParams()

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, data} = useFetch(`http://localhost:4000/api/products/${id}`)
    productDetails.loading = loading;
    productDetails.error = error;
    productDetails.product = data;

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))
    }, [dispatch, match])

    const handleAdd = () => {
        dispatch(addToCart(data, qty));
        history.push("/cart")
    }

    const [current, setCurrent] = useState(0)
    const length = data ? data.images.length : 0

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div>
            {loading ? <h2>  Loading... </h2> : error ? <h2> Error! </h2> : (
                <div className = "fullbox">
                <div className = "left">
                    <div className = "leftimgs">
                        <img src = {data.images[0]} onMouseOver = {() => setCurrent(0)} />
                        <img src = {data.images[1]} onMouseOver = {() => setCurrent(1)} />
                        <img src = {data.images[2]} onMouseOver = {() => setCurrent(2)} />
                    </div>
                    <FaArrowAltCircleLeft className = "left-arrow" onClick = {prevSlide}/>
                    <FaArrowAltCircleRight className = "right-arrow" onClick = {nextSlide}/>
                    {data.images.map((slide, index) => (
                        <div className = {index === current ? "slide active" : "slide"} key = {index} >
                            {
                                index === current && (<img src = {slide} className = "image"/>)
                            }
                        </div>
                    ))}
                </div>
                <div className = "right">
                    <div className = "title"> {data.name} </div>
                    <div className = "reviews"> ★★★★★ </div>
                    <div className = "price"> ${data.price} </div>
                    <div className = "select">
                        <select value = {qty} onChange = {(e) => setQty(e.target.value)} >
                            {[...Array(data.inStock).keys()].map((x) => (
                                <option value = {x + 1}> {x + 1} </option>
                            ))}
                        </select>
                    </div>
                    <div onClick = {handleAdd} className = "btn1234">Add To Bag</div>
                    <div className = "line"></div>
                    <div className = "desc"> {data.description} </div>
                    <div className = "line"></div>
                    <div className = "stock"> In Stock: {data.inStock} </div>
                    <div className = "color">Colors:</div>
                    <div className = "colors">
                        <div style = {{backgroundColor: data.colors[0], color: data.colors[0]}} className = "clr"></div>
                        {
                            data.colors[1] && <div style = {{backgroundColor: data.colors[1], color: data.colors[1]}} className = "clr"> </div>
                        }
                        {
                            data.colors[2] && <div style = {{backgroundColor: data.colors[2], color: data.colors[2]}} className = "clr"> </div>
                        }
                    </div>
                </div>
            </div>
            ) }
        </div>
    )
}