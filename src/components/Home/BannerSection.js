import img1 from '../../assets/images/slider-bg.jpg'
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Banner1() {
    const [data, setData]=useState("");

    let getBannerData = async ()=>{
        try {
            const response = await axios('https://6698f0122069c438cd70b9ad.mockapi.io/api/home/banner')
            console.log(response.data[0]);
            setData(response.data[0]);
        } catch (error) {
            console.error("Error fetching banner data:", error);
        }
    }

    useEffect(()=>{
        getBannerData();
    },[]);



    return (
        <>
            <section class="slider_section position-relative">
                <div class="slider_bg_box">
                    <img src={data.img} alt="" />
                </div>
                <div class="slider_bg"></div>
                <div class="container">
                    <div class="col-md-9 col-lg-8">
                        <div class="detail-box">
                            <h1>
                                {data.title}
                            </h1>
                            <p>
                                {data.description}
                            </p>
                            <div>
                                <a href={data.btn_link} target="_blank" class="slider-link">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}