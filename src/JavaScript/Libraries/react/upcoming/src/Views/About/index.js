import React, { useState } from 'react';


export default function Index() {

    const [cout, a] = useState(0)
    return(
        <div>
            <p>Contador {cout}</p>
            <button onClick={ () => a(cout + 1) }> Click me!</button>
        </div>
    );
    
}