import React from 'react';
import './BuildControls.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [

    { label: "Salad", type: 'salad' },
    { label: "Bacon", type: 'bacon' },
    { label: "Cheese", type: 'cheese' },
    { label: "Meat", type: 'meat' }
    
];

const buildControls = ( props ) => (
    <div className="BuildControls">
        <h2>$ {props.totalPrice}</h2>
        {controls.map( control => (
            <BuildControl
             key = { control.label } 
             label = { control.label } 
             type = { control.type } 
             added = { () => props.ingredientAdded( control.type ) }
             removed = { () => props.ingredientRemoved( control.type ) }
             disabled = { props.ingredientsDisabled[control.type] }/>
        ))}
        <button className="OrderButton" disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;