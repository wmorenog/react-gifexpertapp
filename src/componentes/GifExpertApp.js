import React, { useState } from "react";

import { AddCategory } from './AddCategory';
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {

    // const categories = ['one punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>

            <ol>
                {
                    categories.map( (category) => 
                        <GifGrid 
                            key={category}
                            category={ category }
                        />
                    )
                }
            </ol>
        </div>
    )
}