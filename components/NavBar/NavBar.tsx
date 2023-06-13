import React, { useState } from "react";
import style from "./NavBar.module.scss";
import MobileMenu from "../MobileMenu/MobileMenu";
const NavBar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const menuClicked = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <nav className={style.nav}>
      <div>
        <svg
          width="120"
          height="21"
          viewBox="0 0 120 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6773 20L12.7004 1.89284H7.86823L0.864264 20H5.26211L6.40229 16.9324H14.1664L15.2794 20H19.6773ZM13.1076 13.539H7.46103L10.2843 5.74774L13.1076 13.539ZM32.4525 11.9101V9.76552H27.5932V4.47182H25.2314V9.76552H20.3449V11.9101H25.2314V17.421H27.5932V11.9101H32.4525ZM48.5879 20.1629C51.9542 20.1629 55.049 18.2626 55.049 14.7334C55.049 11.1229 52.3071 10.2542 49.0766 8.97825C46.6605 8.05524 44.9231 7.37657 44.9502 5.53056C44.9774 3.68455 46.579 2.70725 48.3979 2.70725C49.8367 2.70725 51.4927 3.38593 53.0401 4.66185L54.4789 2.78869C52.66 1.32275 50.5425 0.53548 48.3979 0.53548C45.0859 0.53548 42.507 2.76155 42.507 5.63915C42.507 9.03254 45.4117 10.2542 48.2622 11.3129C50.8411 12.2902 52.5786 12.8603 52.5786 15.0049C52.5786 16.8781 50.9769 17.964 48.6151 17.964C46.7419 17.964 44.6787 17.0953 43.2942 15.3578L41.774 17.1767C43.7014 19.2399 46.1718 20.1629 48.5879 20.1629ZM62.1636 20.1629C63.7382 20.1629 64.634 19.7828 65.367 19.3485L64.7969 17.421C64.1454 17.7739 63.331 18.0997 62.5437 18.0997C61.2949 18.0997 60.942 17.3396 60.942 15.7379V8.67963H65.3127V6.77933H60.942V2.02857L58.7431 2.2729V6.77933H57.0328V8.67963H58.7431V16.0637C58.7431 18.7241 59.829 20.1629 62.1636 20.1629ZM72.9228 20.1629C74.6602 20.1629 76.2891 19.2942 77.2935 17.7196H77.3207V20H79.5196V6.77933H77.3207V13.1861C77.3207 16.3351 75.5018 18.154 73.3843 18.154C71.294 18.154 70.1538 17.0138 70.1538 14.0276V6.77933H67.9549V14.652C67.9549 18.4255 69.8823 20.1629 72.9228 20.1629ZM89.1167 20.1629C91.2614 20.1629 92.9445 19.1584 93.8946 17.5568H93.9218V20H96.0393V0.0196819H93.8403V9.14113H93.8132C92.8088 7.53945 91.0985 6.61644 89.0896 6.61644C85.3704 6.61644 82.6286 9.57549 82.6286 13.4847C82.6286 17.5025 85.4519 20.1629 89.1167 20.1629ZM89.4154 18.154C86.7278 18.154 84.8818 16.1451 84.8818 13.4847C84.8818 10.5528 86.9178 8.62534 89.4425 8.62534C92.1029 8.62534 93.9218 10.77 93.9218 13.4847C93.9218 16.2808 91.9129 18.154 89.4154 18.154ZM101.422 4.36323C102.318 4.36323 103.024 3.6574 103.024 2.78869C103.024 1.91999 102.318 1.21416 101.422 1.21416C100.526 1.21416 99.8204 1.91999 99.8204 2.78869C99.8204 3.6574 100.526 4.36323 101.422 4.36323ZM100.309 6.77933V20H102.508V6.77933H100.309ZM112.8 20.1629C116.709 20.1629 119.614 17.421 119.614 13.4032C119.614 9.38546 116.709 6.61644 112.8 6.61644C108.701 6.61644 105.959 9.60263 105.959 13.4032C105.959 17.2038 108.701 20.1629 112.8 20.1629ZM112.8 18.154C110.058 18.154 108.212 16.0365 108.212 13.4032C108.212 10.77 110.031 8.62534 112.8 8.62534C115.352 8.62534 117.361 10.5799 117.361 13.4032C117.361 16.2265 115.325 18.154 112.8 18.154Z"
            fill="black"
          />
        </svg>
      </div>
      <div>
        <button
          onClick={menuClicked}
          className={`${isMenuClicked ? "hidden" : ""}`}
        >
          <svg
            className="lg:hidden block  "
            width={30}
            height={30}
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </button>

        <button
          onClick={menuClicked}
          className={`${!isMenuClicked ? "hidden" : ""}`}
        >
          <svg
            fill="black"
            width={30}
            height={30}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
          </svg>
        </button>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href=""> What We Do</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">Project</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      {isMenuClicked ? <MobileMenu /> : ""}
    </nav>
  );
};

export default NavBar;
