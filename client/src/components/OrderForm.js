import React from 'react';

function OrderForm({setOrders, farmers, orders, customerId, setShowForm, showForm, orderId}) {
  const updateOrder = (event) => {
    event.preventDefault();
    const details = event.target.details.value;
    const farmer_id = event.target.farmer_id.value;
    
    fetch(`http://127.0.0.1:5555/orders/${parseInt(orderId)}`,{
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        details: details,
        customer_id: customerId,
        farmer_id: farmer_id
      }),
    })
    .then(response => response.json())
    .then(data => {
      const updatedOrders = orders.map(order => {
        if (order.id === data.id) {
          return data;
        } else {
          return order;
        }
      });
      setOrders(updatedOrders);
      setShowForm(false);
    });
  };
  return (
        
        <form onSubmit={updateOrder}>
            <label htmlFor="details">Details:</label>
            <input type="text" id="details" name="details" />
            <label htmlFor="farmer_id">Farmer:</label>
            <select id="farmer_id" name="farmer_id">
              {farmers.map((farmer) => (
                <option key={farmer.id} value={farmer.id}>
                  {farmer.name}
                </option>
              ))}
            </select>
            <button type="submit">Edit Order</button>
          </form>
          

  )
}

export default OrderForm;