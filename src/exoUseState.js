import React from 'react';
// Don't modify this line. It is here to make React
// work correctly in this exercise environment.
const useState = React.useState;

// don't change the Component name "App"
export default function App() {
    const [currentNumb, setcurrentNumb] = useState(0);
    const onButtonClick = () => {
      const valNumb = currentNumb+1;
        setcurrentNumb(valNumb);  
        
    };
    
    return (
        <div>
            <button onClick={onButtonClick}>Click Me!</button>
            
            <h1>Current Count:{currentNumb}</h1>
        </div>
    );
}