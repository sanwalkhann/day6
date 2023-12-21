import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState , useEffect } from "react";
import Button from "../images/Frame.png";
import img from "../images/bi_cart.png";
import Logo from "../images/ph_framer-logo.png";
import "./navbar.css";
import Store from "./store";

const Navbar = ({product}) => {
  const [showHiddenComponent, setShowHiddenComponent] = useState(false);

  const { cart, removeProduct, updateCart } = Store();

  const handleButtonClick = () => {
    setShowHiddenComponent(!showHiddenComponent);
  };

  const handleCloseButtonClick = () => {
    setShowHiddenComponent(false);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isPopupOpen]);

  return (
    <div className="flex justify-center items-center bg-white">
      <div className="w-[90%] flex justify-between items-center h-16 md:h-20 lg:h-24 bg-white">
        <div className="flex items-center">
          <img
            className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white rounded-full"
            src={Logo}
            alt="Logo"
          />
          <div className="ml-2 text-black text-xl font-semibold font-monasans">
            Ecommerce App
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <div className="px-3.5 py-2.5 bg-black rounded-full flex items-center space-x-2.5">
            <div className="text-white text-base font-medium font-monasans">
              Contact us
            </div>
          </div>
          <div className="relative">
            <div
              className="px-[18px] py-2.5 bg-black rounded-full flex items-center space-x-3 cursor-pointer"
              onClick={openPopup}
            >
              <img src={img} alt="Cart" className="w-4 h-4 rounded-full" />
              <div className="text-white text-base font-medium font-monasans">
                {cart.length}
              </div>
              <div></div>
            </div>

            {isPopupOpen && (
              <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-xl flex flex-col items-center p-3">
                  <button className="text-3xl mb-5" onClick={closePopup}>
                    &times;
                  </button>
                  <ul className="flex flex-col gap-4">
                    {cart.map((item) => (
                      <li className="flex gap-8 items-center" key={item.id}>
                      <img
                      src={
                        item.images[0] ??
                        "https://etc.cuit.columbia.edu/sites/default/files/styles/cu_crop/public/content/other_google_ai.jpeg?itok=32JTlMBB"
                      }
                      alt={item.title}
                      className="w-14 h-14"
                    />
                    <h1>{item.title}</h1>
                        <button
                          onClick={() => updateCart(item.id, item.quantity + 1)}
                          className="p-2 bg-blue-600 rounded-2xl h-6 flex items-center"
                        >
                          +
                        </button>

                        <div className="flex items-center text-lg">
                          {item.quantity}
                        </div>
                        <button
                          onClick={() => updateCart(item.id, item.quantity - 1)}
                          className="p-2 bg-blue-600 rounded-2xl h-6 flex items-center"
                        >
                          -
                        </button>

                        <button
                          className=""
                          onClick={() => removeProduct(item.id)}
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <img
          src={Button}
          alt="Button"
          className="bg-white cursor-pointer"
          onClick={handleButtonClick}
        />
      </div>

      {showHiddenComponent && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 hamberg1">
          <div className="text-white p-4 md:p-8 animate-fadeIn">
            <div
              className="cursor-pointer absolute top-4 left-2 text-[1.6rem]"
              onClick={handleCloseButtonClick}
            >
              X
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:mt-12">
              <div className="menu-item">Our Work</div>
              <div className="menu-item">About Us</div>
              <div className="menu-item">Processes</div>
              <div className="menu-item">Blog</div>
              <div className="col-span-2 md:col-span-1 mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-white font-semibold text-[1.6rem] mb-2 md:mb-5">
                      Our Offices
                    </div>
                    <div className="text-white font-semibold mb-1">
                      Copenhagen
                    </div>
                    <div>1 Carlsberg Gate</div>
                    <div>1260, København, Denmark</div>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-[1.6rem] mb-2 md:mb-5">
                      Our Offices
                    </div>
                    <div className="text-white font-semibold mb-1">Billund</div>
                    <div>24 Lego Allé</div>
                    <div>7190, Billund, Denmark</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
