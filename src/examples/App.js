import React from "react";
import { CardSlide, CardSlideItem } from "../lib";

const App = () => (
    <div className='row'>
        <div className='col-sm-12 col-lg-4'>
            <CardSlideItem />
        </div>
        <div className='col-sm-12 col-lg-4'>
        <CardSlide items={[{
                cardName: 'Card Name Picture',
                cardDescription: 'Description',
                cardTotal: 20,
                showBodyImage: true,
                bodyImage: 'https://via.placeholder.com/350x350'
            },{
                cardName: 'Card Name 2',
                cardDescription: 'Description 2',
                cardTotal: 1
            },{
                cardName: 'Carde Name 3',
                cardDescription: 'Description 3',
                cardTotal: 2
            }]}/>
        </div>
        <div className='col-sm-12 col-lg-4'>
            <CardSlideItem />
        </div>
    </div>
);

export default App;