//form.js
import React ,{ useState } from 'react';

<script src="App.js"></script>


function FormComponent() {
    const [formData, setFormData] = useState({ name: '', email: '' });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can handle the form data submission here
      alert('Name: ${formData.Name}, description: ${formData.description},Category: ${formData.Category},Quantity: ${formData.Quantity},Price: ${formData.Price}');
    };
  
    return (
        <form onSubmit={handleSubmit} align="center">
        <label htmlFor="Name"></label>
        <input type="text" id="Name" name="Name" placeholder="Name" value={formData.Name} onChange={handleChange} />
        <br></br>
  
        <label htmlFor="description"></label>
        <input type="text" id="description" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <br></br>
  
        <label htmlFor="Category"></label>
        <input type="text" id="Category" name="Category" placeholder="Category" value={formData.Category} onChange={handleChange} />
        <br></br>

        <label htmlFor="Quantity"></label>
        <input type="number" id="Quantity" name="Quantity" placeholder="Quantity" value={formData.Quantity} onChange={handleChange} />
        <br></br>

        <label htmlFor="Price"></label>
        <input type="number" id="Price" name="Price" placeholder="Price" value={formData.Quantity} onChange={handleChange} />
        
        <br></br>
        <button type="submit" class="Submit_Button" align="left">Submit</button>
                                 
        <button type="reset">Cancel</button>
      </form>
    );
  }
  
  export default FormComponent;
