
import img1 from '../../assets/images/o1.jpg';
import img2 from '../../assets/images/o2.jpg';
import img3 from '../../assets/images/o3.jpg';

export default function OfferSection() {
    return (
        <>
            <section class="offer_section layout_padding">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-7 px-0">
                            <div class="box offer-box1">
                                <img src={img1} alt="" />
                                <div class="detail-box">
                                    <h2>
                                        Upto 15% Off
                                    </h2>
                                    <a href="">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 px-0">
                            <div class="box offer-box2">
                                <img src={img2} alt="" />
                                <div class="detail-box">
                                    <h2>
                                        Upto 10% Off
                                    </h2>
                                    <a href="">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                            <div class="box offer-box3">
                                <img src={img3} alt="" />
                                <div class="detail-box">
                                    <h2>
                                        Upto 20% Off
                                    </h2>
                                    <a href="">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}