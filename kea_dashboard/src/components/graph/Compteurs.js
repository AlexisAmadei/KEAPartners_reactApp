import React from "react";
import Card from './Card'

export default function Compteurs(props) {
    return (
        <div className='box-compteur'>
            <div className='card-container'>
                <Card title='Moyenne initiale' operator='à' value='1.3' />
            </div>
        </div>
    )
}