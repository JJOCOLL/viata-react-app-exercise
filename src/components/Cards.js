import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src={require('../images/img-4.jpg').default} 
                            text='so good' 
                            label='what' 
                            path='/services' 
                        />
                        <CardItem 
                            src={require('../images/img-3.jpg').default} 
                            text='so good' 
                            label='what' 
                            path='/services' 
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src={require('../images/img-5.jpg').default} 
                            text='so good' 
                            label='what' 
                            path='/services' 
                        />
                        <CardItem 
                            src={require('../images/img-6.jpg').default} 
                            text='so good' 
                            label='what' 
                            path='/services' 
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
