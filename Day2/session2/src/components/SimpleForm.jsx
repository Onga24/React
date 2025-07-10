import {useState} from 'react'

export default function SimpleForm() {

    const [name, setName] = useState('');
    
function handleSubmit(event) {
      // Prevent the default form submission behavior like page reload
        event.preventDefault();
        alert(`Hello, ${name}`);
        setName(''); // Clear the input field after submission
        
    }
function handleChange(event) {
        setName(event.target.value); // Update the name state with the input value
    }   


return (
    
    <>
        <div>SimpleForm</div>
        <br />
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                value={name}
                onChange={handleChange}
                placeholder='Enter Your Name' />
                <button type='submit'>
                    Greet Me
                </button><br /><br />
<output onChange={handleChange}> name:{name}</output>
            </form>
            <h2>End Form</h2>
            <hr /><hr />
        </div>

    </>

  )
}
