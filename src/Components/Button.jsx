const Button = ({ onClick, color, text,type}) =>{ 
    const colorMap = {
        red:"bg-red-500",
        blue:"bg-blue-500",
        green:"bg-blue-500",
        gray:"bg-gray-500"
    };
    
    return ( 
    <button 
        onClick = {onClick}
        className = { type==="a"?" mt-4 cursor-pointer text-blue-500 hover:text-blue-700":"text-white py-2 px-4 rounded shadow " +colorMap[color]}>

        {text}
        
    </button>
    );
};

export default Button;