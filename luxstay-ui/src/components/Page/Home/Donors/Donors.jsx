import classNames  from "classnames/bind";
import styles  from './Donors.module.scss';
import images from "~/components/assets/images/donors"

const cx = classNames.bind(styles);


function Donors() {
    return ( 
        <div className={cx("wrapper")}>
            <div className={cx("list-donors")}>
                {
                    Object.keys(images).map(key => 
                         <div className={cx("item")}>
                            <img src={images[key]} alt="" />
                        </div> 
                    )
                }         
            </div>
        </div>
     );
}

export default Donors;