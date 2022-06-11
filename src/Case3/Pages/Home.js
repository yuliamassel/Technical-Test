import React from 'react';
import { itemFlash, listItem } from '../../data';
import Button from '../Components/Button';
import Navbar from '../Components/Navbar';
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import "./Home.css"
import Footer from '../Components/Fotter';

const Home = () => {

  return (
    <div>
      <Navbar />
      <div className="">
        <div className="display-top">
          <div className="txt-display">
            <h1>Discover & Shop The Trend</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Incidunt, illum odio perferendis quidem vero quia.</p>
            <Button className="btn-display">Shop Now</Button>
          </div>
          <div className="img-display">
            <img src="/img/display.png" alt="" width={300} />
          </div>
        </div>
        <div className="feature">
          <div className="box">
            <FaIcons.FaTruck className='icon' size={50} />
            <h3>Free Delievery</h3>
            <p>Get Free delievery for every order above $20.</p>
          </div>
          <div className="box">
            <MdIcons.MdPayment className='icon' size={50} />
            <h3>Secure Payment</h3>
            <p>100% secure payment. Get easy support anytime</p>
          </div>
          <div className="box">
            <FaIcons.FaHeadset className='icon' size={50} />
            <h3>24/7 Online Support</h3>
            <p>Dedicated support anytime and everywhere</p>
          </div>
          <div className="box">
            <MdIcons.MdAssignmentReturn className='icon' size={50} />
            <h3>90 Days Return</h3>
            <p>Return within 90days of receiving your order</p>
          </div>
        </div>
        <div className='flash-menu'>
          <div className="icon-menu">
            <MdIcons.MdFlashOn className='icon' size={50} />
            <h3>Flash Deals</h3>
          </div>
          <div className="flash-deals">
            {itemFlash.map((item) => {
              return (
                <div className="flash-stuf">
                  <div className="desc-stuf">
                    <p>{item.merk}</p>
                    <h5>Rp.{item.cost}</h5>
                    <Button className="btn-buy">BUY NOW</Button>
                  </div>
                  <img src={item.image} alt="" width={180} height={200} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="hots-menu">
          <div className="icon-menu">
            <MdIcons.MdLocalFireDepartment className='icon' size={50} />
            <h3>Hot Deals</h3>
          </div>
          <hr />
          <div className="hot-deals">
            {listItem.map((itemList) => {
              return (
                <div className="item">
                  <img src={itemList.image} alt="" width={200} height={200} />
                  <h3 className="title">{itemList.merk}</h3>
                  <p>Rp. {itemList.cost}</p>
                  <p className="stock">Stock: {itemList.stock}</p>
                  {/* <Button
                className="btn-add"
              >
                Add To Cart
              </Button> */}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home