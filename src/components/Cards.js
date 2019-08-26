import React, { Component } from 'react';

import CardsTransport from "./CardsTransport";
import CardsFood from "./CardsFood";
import CardsPayments from "./CardsPayments";
import CardsNeeds from "./CardsNeeds";
import CardsNews from "./CardsNews";

import DataTransport from "./../Assets/Data/DataTransport";
import DataFood from "./../Assets/Data/DataFood";
import DataPayments from "./../Assets/Data/DataPayments";
import DataNeeds from "./../Assets/Data/DataNeeds";
import DataNews from "./../Assets/Data/DataNews";


export default class Cards extends Component {
    render() {
        const ListTransport = DataTransport.map(IsiData => {
            return  <CardsTransport id={IsiData.id} image={IsiData.img} title={IsiData.title} desc={IsiData.desc} />
        });
        const ListFood = DataFood.map(IsiData => {
            return  <CardsFood id={IsiData.id} image={IsiData.img} title={IsiData.title} desc={IsiData.desc} />
        });
        const ListPayments = DataPayments.map(IsiData => {
            return  <CardsPayments id={IsiData.id} image={IsiData.img} title={IsiData.title} desc={IsiData.desc} />
        });
        const ListNeeds = DataNeeds.map(IsiData => {
            return  <CardsNeeds id={IsiData.id} image={IsiData.img} title={IsiData.title} desc={IsiData.desc} />
        });
        const ListNews = DataNews.map(IsiData => {
            return  <CardsNews id={IsiData.id} image={IsiData.img} title={IsiData.title} desc={IsiData.desc} />
        });

        return (
            <div>
                {/* =========================================4 GRIDS================================================== */}
                <div className="container" style={{marginTop: '85px'}}>
                <h1><b>Our Services</b></h1>
                <h1><b>Transport &amp; Logistics</b></h1>
                <p>Moving something (or someone) from 
                    point A to point B? Our Gojek drivers in green jackets and helmets save your time, and energy.</p>
                <div className="row" style={{marginTop: '35px'}}>
                    {ListTransport}
                </div>
                </div>
                {/* =========================================3 GRIDS of 4================================================== */}
                <div className="container" style={{marginTop: '35px'}}>
                <h1><b>Food &amp; FMCG</b></h1>
                <p>Order food from a whole lotta restaurants, get medicines delivered in a jiffy, 
                    or fill your shopping cart from many a mart.</p>
                <div className="row" style={{marginTop: '35px'}}>
                    {ListFood}
                </div>
                </div>
                {/* =========================================4 GRIDS================================================== */}
                <div className="container" style={{marginTop: '35px'}}>
                <h1><b>Payments</b></h1>
                <p>From split the bills to donations, we make payments reliable, easy and delightful for our customers and merchants alike.</p>
                <div className="row" style={{marginTop: '35px'}}>
                    {ListPayments}
                </div>
                </div>
                {/* =========================================4 GRIDS================================================== */}
                <div className="container" style={{marginTop: '35px'}}>
                <h1><b>Daily Needs</b></h1>
                <p>Those regular chores that call for your attention? We have all products under daily needs to make your life simpler and hassle-free.</p>
                <div className="row" style={{marginTop: '35px'}}>
                    {ListNeeds}
                </div>
                </div>
                {/* =========================================1 GRID================================================== */}
                <div className="container" style={{marginTop: '35px'}}>
                <h1><b>News &amp; Entertainment</b></h1>
                <p>Binge on your favourite series, book tickets to the next concert, organise celebrity events, 
                    and do much more. All your treasured digital content belong here.</p>
                <div className="row" style={{marginTop: '35px'}}>
                    {ListNews}
                </div>
                </div>
            </div>
        )
    }
}
