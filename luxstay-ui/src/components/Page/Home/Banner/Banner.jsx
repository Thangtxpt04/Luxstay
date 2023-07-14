import classNames  from "classnames/bind";
import styles  from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    return ( 
        <div className={cx("wrapper")}>
            <div className={cx("content")}>
                <h1 className={cx("title")}>Homestay, Khách sạn, Resort...</h1>
                <div id="bookingAffiliateWidget_fd222dd1-b7ac-47aa-a12c-99d8d6ea1ba7">
                    &nbsp;
                    <iframe src="https://www.booking.com/prelanding_product.html?responsive=false&amp;widget_id=fd222dd1-b7ac-47aa-a12c-99d8d6ea1ba7&amp;aid=2265164" scrolling="no" style={{ border: '0px', width: '600px', height: '300px' }}></iframe>
                </div>
            </div>
        </div>
     );
}

export default Banner;