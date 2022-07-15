import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';

function Tweet() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/tweets');
        const items = await data.json();
        console.log(items)
        setItems(items.result);

    };

    return(
        <section>
            
                <div className="container-fluid p-3 w-50">
                    <p>
                       {items}
                    </p>
                </div>
        </section>
    );
}

export default Tweet;