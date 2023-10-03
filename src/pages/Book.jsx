import '../App.css'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const months = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const d = new Date();
let date = d.getDate() + 1;
let month = months[d.getMonth()];




export default function Book() {

  const navigate = useNavigate();
  const [studentname, setName] = useState('');
  const [studentgrade, setGrade] = useState('');
  const [studentsec, setSec] = useState('');
  const [studentitem, setItem] = useState('');

  const [updatedname, setUpdatedName] = useState(studentname);
  const [updatedgrade, setUpdatedGrade] = useState(studentgrade);
  const [updatedsec, setUpdatedSec] = useState(studentsec);
  const [updateditem, setUpdatedItem] = useState(studentitem);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeGrade = (event) => {
    setGrade(event.target.value);
  };
  const handleChangeSec = (event) => {
    setSec(event.target.value);
  };
  const handleChangeItem = (event) => {
    setItem(event.target.value);
  };



  const handleClick = () => {
    // 👇 "message" stores input field value
    setUpdatedName(studentname);
    setUpdatedGrade(studentgrade);
    setUpdatedSec(studentsec);
    setUpdatedItem(studentitem);
    navigate('/success');
    fetch('https://discord.com/api/webhooks/1151708905693515946/FztFxmoUTUICL3WY9Ysf7F5W64mJvpx1b1yzuzWBd19IhQ3QPrJpzjZDRFU62GctahWj', {
      method: 'POST',
      body: JSON.stringify({
        "content": "New booking from **" + studentname + "** of grade **" + studentgrade + studentsec + "** for **" + studentitem + "** on **" + date + "ᵗʰ " + month + "**"
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Handle data
    })
    .catch((err) => {
      console.log(err.message);
    });

  };  


  return (

    <main >
      <h1>
        Name: <input size="50"
          type="text"
          id="studentname"
          name="studentname"
          onChange={handleChangeName}
          value={studentname}
        /><br />
        Grade: <input size="50"
          type="text"
          id="studentgrade"
          name="studentgrade"
          onChange={handleChangeGrade}
          value={studentgrade}

        /><br />
        Section: <input size="50"
          type="text"
          id="studentSection"
          name="studentSection"
          onChange={handleChangeSec}
          value={studentsec}
        /><br />
        Meal:‎ ‎ ‎
        <select id="studentMeal"
          name="studentMeal"
          onChange={handleChangeItem}
          value={studentitem}>
          <option></option>
          <option onChange={handleChangeItem} value="Lunch">Lunch</option>
          <option onChange={handleChangeItem} value="Breakfast">Breakfast</option>

        </select><br />





        <button onClick={handleClick} className="button-5" role="button">Confirm Booking</button>
        

      </h1>
      <div class='bottom' position={"absolute"} height="calc('5vh')" width="100%" zIndex={10}>For more information, contact us at +91 9591062626</div>

    </main>
  )

}