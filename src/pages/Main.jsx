import '../App.css'
import {useNavigate} from 'react-router-dom';

const d = new Date();

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayWord = weekday[(d.getDay()) + 1];


let day = (d.getDay()) + 1;
let lunch = "lunch";
let breakfast = "breakfast";
if (day == 1) {
  lunch = "lunch-mon";
  breakfast = "break-mon";
}
else if (day == 2) {
  lunch = "lunch-tue";
  breakfast = "break-tue";
}
else if (day == 3) {
  lunch = "lunch-wed";
  breakfast = "break-wed";
}
else if (day == 4) {
  lunch = "lunch-thurs";
  breakfast = "break-thurs";
}
else if (day == 5) {
  lunch = "lunch-fri";
  breakfast = "break-fri";
}
else if (day == 6) {
  lunch = "   -   ";
  breakfast = "   -   ";
}
else if (day == 7) {
  lunch = "   -   ";
  breakfast = "   -   ";
}
export default function Main() {
  const navigate = useNavigate();

  const navigateToBook = () => {
    // 👇️ navigate to /contacts
    navigate('/book');
  };
  return (
    <main>
      <h1>Menu on <b>{dayWord}</b>
        <br />
        Lunch: {lunch}
        <br />
        Breakfast: {breakfast}
        <br />
        <button onClick={navigateToBook} class="button-5" role="button">Book your meal now!</button>
      </h1>
      <div class='bottom' position={"absolute"} height="calc('5vh')" width="100%" zIndex={10}>For more information, contact us at +91 9591062626</div>

    </main>
  )
}
