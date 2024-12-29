import React from "react";

function Card({image, title, author, description}) {
    return (
        <div
        style ={{
            border: '1px solid #ccc',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderradius: '10px',
            padding: '15px',
            maxwidth: '200px',
            textAlign: 'center',
            backgroundcolor: '#fff',
        }}
        >
            <img
            src={image}
            alt={title}
            style={{width: '100%', borderRadius: '5px', height:"auto", marginBottom:"10px"}}
            />
            <h3 style={{fontSize: '18px', marginBottom: '5px'}}>{title}</h3>
            <p style={{ color: '#555', fontSize: '14px', marginBottom: '10px'}}>{author}</p>
            {description && <p style={{marginTop: '10px', fontSize: '14px', color: '#333', lineHeight: '1.5'}}>{description}</p>}
        </div>
    );
}

export default Card;    