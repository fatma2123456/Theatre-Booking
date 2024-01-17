import React from 'react';

function FoodAndDrink({ foodAndDrinkOptions, onSelectOption }) {
  return (
    <div className="mt-4">
      <h3>Food and Drink Options</h3>
      <ul className="list-group">
        {foodAndDrinkOptions.map(option => (
          <li key={option.id} className="list-group-item d-flex justify-content-between align-items-center">
            {option.name}
            <span>
              {option.price} USD
              <button className="btn btn-primary mx-3" onClick={() => onSelectOption(option.id)}>Select</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodAndDrink;

