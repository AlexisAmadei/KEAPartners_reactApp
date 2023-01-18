import React from 'react'
import './Card.css'

export default function CompteursCard(props) {
    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '33%',
        backgroundColor: '#f7f9fb',
        borderRadius: '8px',
        border: '1px solid rgba(77, 77, 77, 0.3)',
        padding: '15px 8px',
        height: '89px',
        width: '142px',
    }

    return (
        <div className='card'>
            <div>
                <span className="card-title">{props.title}</span>
            </div>
            <div className='card-body'>
                <span className="operator">{props.operator}</span>
                <span className="value">{props.value}</span>
            </div>
        </div>
    )
}