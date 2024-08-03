import img1 from '../../assets/images/p1.png';
import img2 from '../../assets/images/p2.png';
import img3 from '../../assets/images/p3.png';
import img4 from '../../assets/images/p4.png';
import img5 from '../../assets/images/p5.png';
import img6 from '../../assets/images/p6.png';
import img7 from '../../assets/images/p7.png';
import img8 from '../../assets/images/p8.png';


export default function ShopSection() {
    return (
        <>
            <section class="shop_section layout_padding">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2>
                            Latest Products
                        </h2>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="box">
                                <a href="">
                                    <div class="img-box">
                                        <img src={img1} alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h6>
                                            Necklace
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $200
                                            </span>
                                        </h6>
                                    </div>
                                    <div class="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="box">
                                <a href="">
                                    <div class="img-box">
                                        <img src={img2} alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h6>
                                            Necklace
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $300
                                            </span>
                                        </h6>
                                    </div>
                                    <div class="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="box">
                                <a href="">
                                    <div class="img-box">
                                        <img src={img3} alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h6>
                                            Necklace
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $110
                                            </span>
                                        </h6>
                                    </div>
                                    <div class="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="box">
                                <a href="">
                                    <div class="img-box">
                                        <img src={img4} alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h6>
                                            Ring
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $45
                                            </span>
                                        </h6>
                                    </div>
                                    <div class="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="box">
                                <a href="">
                                    <div class="img-box">
                                        <img src={img5} alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h6>
                                            Ring
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $95
                                            </span>
                                        </h6>
                                    </div>
                                    <div class="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="box">
                                <a href="">
                                    <div class="img-box">
                                        <img src={img6} alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h6>
                                            Earrings
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $70
                                            </span>
                                        </h6>
                                    </div>
                                    <div class="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="box">
                                <a href="">
                                    <div class="img-box">
                                        <img src={img7} alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h6>
                                            Earrings
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $400
                                            </span>
                                        </h6>
                                    </div>
                                    <div class="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="box">
                                <a href="">
                                    <div class="img-box">
                                        <img src={img8} alt="" />
                                    </div>
                                    <div class="detail-box">
                                        <h6>
                                            Necklace
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $450
                                            </span>
                                        </h6>
                                    </div>
                                    <div class="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="btn-box">
                        <a href="">
                            View All Products
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}