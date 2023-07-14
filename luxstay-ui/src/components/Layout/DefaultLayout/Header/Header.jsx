import classNames  from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles  from './Header.module.scss';
import Button from "~/components/Button/Button";
import images from "~/components/assets/images";
const cx = classNames.bind(styles);

function Header() {
    const [activeSearch, setActiveSearch] = useState(false);

    const handleActiveSearch = () => {
        setActiveSearch(!activeSearch)
    }

    return  <header className={cx('wrapper')}>
        <div className={cx("inner")}>
            <Link to={"/"} className={cx("logo")}>
                <img src={images.logo} alt="Luxstay" />
            </Link>
            <nav id={cx("navbar")} className={cx("navbar")}>
                <ul className={cx("menu")}>
                    <li className={cx("item")}>
                        <a href="#">
                            LUXSTAY
                        </a>
                    </li>
                    <li className={cx("item", "item-has-children")}>
                        <a href="#">
                            HOMESTAY
                            <FontAwesomeIcon icon={faChevronDown} className={cx("item-icon")} />
                        </a>
                        <ul className={cx("sub-menu")}>
                            <li className={cx("sub-menu-item")}>
                                <Link>Việt Nam</Link>
                            </li>
                            <li className={cx("sub-menu-item")}><Link>Thái Lan</Link></li>
                            <li className={cx("sub-menu-item")}>
                                <Link>Singapore</Link>
                            </li>
                            <li className={cx("sub-menu-item")}>
                                <Link>Malaysia</Link>
                            </li>
                            <li className={cx("sub-menu-item")}>
                                <Link>Campuchia</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={cx("item")}>
                        <a href="#">
                            KHÁCH SẠN
                        </a>
                    </li>
                    <li className={cx("item")}>
                        <a href="#">VÉ MÁY BAY</a>
                    </li>
                    <li className={cx("item")}>
                        <a href="#">THUÊ XE</a>
                    </li>
                    <li className={cx("item")}>
                        <a href="#">LIÊN HỆ</a>
                    </li>
                    .
                </ul>
            </nav>

            <div className={cx("search")} >
                {activeSearch ? (
                    <span className={cx("close-icon")} onClick={handleActiveSearch}>
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                ) : 
                (
                    <span className={cx("search-icon")} onClick={handleActiveSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>

                )
                }
                {activeSearch && (
                    <div className={cx("wrapper")}>
                        <form action="" method="get" id={cx("search-form")} className={cx("search-form")}>
                            <input type="text" name="search-input" className={cx("search-input")} placeholder="Search for..." />
                            <Button primary className={cx("btn-search")} >Search</Button>
                        </form>
                    </div>
                )
                }
            </div>

        </div>
    </header> ;
}

export default Header;