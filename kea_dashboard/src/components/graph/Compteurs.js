import React from "react";
import Card from './Card'


export default function Compteurs(props) {
    return (
        <div className='box-compteur'>
            <div className='card-container'>
                <Card title='Moyenne initiale' value='1.3' />
                <Card title='Moyenne ambition' value='+2.4pts' />
                <Card title='Moyenne réalisation' value='+1.5pts' />
            </div>
        </div>
    )
}