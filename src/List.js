import React from 'react';
import './List.css';
import Card from './Card';

export default function list(props){
    return (
        <section className='List'>
            <header className='List-header'>
                <h1>{props.header}</h1>
            </header>
            <div className='List-cards'>
            {props.cards.map((card) =>
          <Card
            title={card.title}
            content={card.content}
            key={card.id}
          />
        )}
            </div>
        </section>
    )
}
