import React, {useState} from "react";



const Share = () => {

    const [message, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);
    };

    const handleClick = event => {
        event.preventDefault();

        // 👇️ value of input field

        // const urlParams = new URLSearchParams(window.location.search);
        // urlParams.set('n', message);
        // window.location.search = urlParams;

        //http://demourl.com/path?id=100&topic=main

        var url = new URL(window.location);
        var search_params = url.searchParams;

        // new value of "id" is set to "101"
        search_params.set('n', message.split(" ").join("").toLocaleLowerCase());

        // change the search property of the main url
        url.search = search_params.toString();

        // the new url string
        var new_url = url.toString();

        // output : http://demourl.com/path?id=101&topic=main
        console.log(new_url);
        window.open(`whatsapp://send?text=${new_url}`)
    };

    const Name = window.location.search;
    const fName = Name.substring(3).replace('+', ' ');
    
    return(
        <div>
            <h2>{fName}</h2>
            <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                value={message}
                autoComplete="off"
            />

            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default Share;