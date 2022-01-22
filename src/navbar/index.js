import React, { useContext } from 'react';
import './navbar.css'
import { ThemeContext } from '../ThemeContext';
import ThemeButtonn from '../ThemeButton';
import { BsFillTelephoneFill, BsInstagram, BsFacebook } from 'react-icons/bs'

const Navbar = () => {
    const { darkMode } = useContext(ThemeContext);
    console.log(darkMode);
    return (
        <div className={darkMode ? "container-fluid p-1 LightMode" : "container-fluid p-1"}>
            <div className='absolu'>
                <p><ThemeButtonn /></p>
                <p><a className={darkMode ? "text-primary gg" : "text-light gg"} href="tel:+998781503150"><BsFillTelephoneFill /> </a></p>
                <p><a className={darkMode ? "text-primary gg" : "text-light gg"} href="https://www.instagram.com/akromov_07/"><BsInstagram /></a></p>
                <p><a className={darkMode ? "text-primary gg" : "text-light gg"} href="https://www.facebook.com/akromov.ibrohim.3"><BsFacebook /></a></p>
            </div>
            <div className="nav1">
                <div className='brinchi'>
                    <img className='Logo' src="https://vatanparvar.uz/wp-content/uploads/2021/11/vatanparvar-logo.png" alt="" />
                    <p className='ps-1'>O’ZBEKISTON RESPUBLIKASI MUDOFAASIGA KO’MAKLASHUVCHI <span className='spann'> «VATANPARVAR» </span> TASHKILOTI</p>
                </div>
                <ul className='nav-area'>
                    <li className="libu"><a href="#" className={darkMode ? "qora" : "oqni"}>Biz haqimizda</a>
                        <div className="dropdown_menu">
                            <ul>
                                <li><a href="#">Nimadir</a></li>
                                <li><a href="#">Nimadir</a></li>
                                <li><a href="#">Nimadir</a></li>
                                <li><a href="#">Nimadir</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className='libu'><a href="#" className={darkMode ? "qora" : "oqni"}>Axborot xizmati</a>
                        <div className="dropdown_menu">
                            <ul>
                                <li><a href="#">Nimadir</a></li>
                                <li><a href="#">Nimadir</a></li>
                                <li><a href="#">Nimadir</a></li>
                                <li><a href="#">Nimadir</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className='libu'><a href="#" className={darkMode ? "qora" : "oqni"}>Hujjatlar</a></li>
                    <li className='libu'><a href="#" className={darkMode ? "qora" : "oqni"}>Kontaktlar</a></li>
                    <li className='libu'><a href="#" className={darkMode ? "qora" : "oqni"} >Murpjaat qilish</a>
                        <div className="dropdown_menu">
                            <ul>
                                <li><a href="#">Nimadir</a></li>
                                <li><a href="#">Nimadir</a></li>
                                <li><a href="#">Nimadir</a></li>
                                <li><a href="#">Nimadir</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                {/* <div>
                    <a href="#" className='btn-area'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGVSURBVHjaYmRgSFy7tkxDQ6Sr68jChRsYGP7s3Fl37corFTURX98iIJeB4RcY/YAwAAKIEajh06dpO3fePXfuxb9//7KzTb9//8vGxvj27feZM8/8+f3v95+/EPL377+bNlUBBBALAwPD69ff7O0V3rz55uqq9OTJJ2EhzsePvwoLc969++73r7+/fv/99esPULWsLD/QHoAAYkllmP9wjvbHxy9E//49v/fP379/7v8CmXnv198ooKrfv//9+v3nF4jB/1vqDMNrgABi/PjxJy8vK9Ce////M4AhLsDIyHju3AOAAGIBuhuiGqSBAbdyoCwj479/fwACiOUfwz+YAF7zgTb8///nDwNAADEGMzAkZTW8v//4358/f8Fu/fMLHCJABHT9b5AgJKQEleRyzm0CCCCWtf4Mwu7P7r17CFby+9efX+CAAQfPn9+//oH0AQ0AhoaK8H+GcwwAAcQCjJDff/9I8kr+Bov++QcxHBb6IHuBwn///v/7999foCcBAoiRwR4WlcgRCiEhsQwKCwQACDAAOjxvXowI8ZUAAAAASUVORK5CYII=" alt="" />
                    </a>
                    <a href="#" className='btn-area'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGVSURBVHjaYmRgSFy7tkxDQ6Sr68jChRsYGP7s3Fl37corFTURX98iIJeB4RcY/YAwAAKIEajh06dpO3fePXfuxb9//7KzTb9//8vGxvj27feZM8/8+f3v95+/EPL377+bNlUBBBALAwPD69ff7O0V3rz55uqq9OTJJ2EhzsePvwoLc969++73r7+/fv/99esPULWsLD/QHoAAYkllmP9wjvbHxy9E//49v/fP379/7v8CmXnv198ooKrfv//9+v3nF4jB/1vqDMNrgABi/PjxJy8vK9Ce////M4AhLsDIyHju3AOAAGIBuhuiGqSBAbdyoCwj479/fwACiOUfwz+YAF7zgTb8///nDwNAADEGMzAkZTW8v//4358/f8Fu/fMLHCJABHT9b5AgJKQEleRyzm0CCCCWtf4Mwu7P7r17CFby+9efX+CAAQfPn9+//oH0AQ0AhoaK8H+GcwwAAcQCjJDff/9I8kr+Bov++QcxHBb6IHuBwn///v/7999foCcBAoiRwR4WlcgRCiEhsQwKCwQACDAAOjxvXowI8ZUAAAAASUVORK5CYII=" alt="" />
                    </a>
                </div> */}
            </div>
        </div>
    )
}

export default Navbar;


// <img className='logo1' src="https://vatanparvar.uz/wp-content/uploads/2021/11/vatanparvar-logo.png" alt="vatanparvar" />
// <div className='pTage'>
//     <p >
//         O’ZBEKISTON RESPUBLIKASI MUDOFAASIGA KO’MAKLASHUVCHI «VATANPARVAR» TASHKILOTI
//     </p>
// </div>