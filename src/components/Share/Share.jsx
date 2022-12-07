import React, {useState} from "react";
import './share.scss';
import logo from '../../images/logo-new.png';
import invitation from '../../images/invitation.png';

const Share = () => {
    const [message, setMessage] = useState('');
    const handleChange = event => {
        setMessage(event.target.value);
    };

    const handleClick = event => {
        event.preventDefault();
        var url = new URL(window.location);
        var search_params = url.searchParams;
        search_params.set('n', message.split(" ").join("-").toLocaleLowerCase());
        url.search = search_params.toString();
        var new_url = url.toString();
        window.open(`whatsapp://send?text=${message} તરફથી આપને ખાસ આમંત્રણ છે. જલ્દીથી જુઓ. ${new_url}`)
    };

    const Name = decodeURIComponent(window.location.search) ? decodeURIComponent(window.location.search) : window.location.search;
    const fName = Name.substring(3).replaceAll('-', ' ');
    const arr = fName.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    const fNameNew = (Name === '' ? 'Your Name' : arr.join(" "));
    
    return(
        <div className="psm-container">
            <img src={invitation} alt="આમંત્રણ" width='200' /><br />
            <img src={logo} className="psm-container__logo" alt="psm100" />
            <h3 className="psm-container__name">{fNameNew}</h3>
            <div className="psm-container__invitation">તરફ થી આપ સર્વેને પ્રમુખ સ્વામી મહારાજ શતાબ્દી મહોત્સવમાં આપના કુટુંબ અને મિત્ર મંડળ સાથે પધારવવા હાર્દિક આમંત્રણ છે.</div>
            <div className="psm-container__date">પ્રમુખ સ્વામી મહારાજનો <br /> શતાબ્દી મહોત્સવ અમદાવાદ ખાતે <br /> તારીખ ૧૫-૧૨-૨૦૨૨ થી ૧૫-૦૧-૨૦૨૩ સુધી<br />ખૂબ જ દિવ્યતા અને ભવ્યતાથી ઉજવાશે.<br />વધુ માહિતી માટે જુઓ <a href="https://psm100.org" target="_blank">https://psm100.org</a></div>
            <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                value={message}
                autoComplete="off"
                placeholder="👉તમારું નામ લખો..."
                className="nameInput"
                autofocus="autofocus"
            />
            <button onClick={handleClick} className="nameButton">👉 Share</button>
        </div>
    );
}

export default Share;