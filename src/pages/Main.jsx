import '../App.css'
import {useNavigate} from 'react-router-dom';

const d = new Date();

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayWord = weekday[(d.getDay()) + 1];


let day = (d.getDay()) + 1;
let lunch = "lunch";
let breakfast = "breakfast";
if (day == 1) {
  lunch = "Sabzi + Chapati + Dal + Rice + Curd + Papad";
  breakfast = "break-mon";
}
else if (day == 2) {
  lunch = "Curry + Chapati + Rasam + Rice + Curd + Papad";
  breakfast = "break-tue";
}
else if (day == 3) {
  lunch = "Special - Rice + Noodles + ketchup";
  breakfast = "break-wed";
}
else if (day == 4) {
  lunch = "Sabzi + Chapati + Sambar + Rice + Curd + Papad";
  breakfast = "break-thurs";
}
else if (day == 5) {
  lunch = "Pulao + raita + Pasta + ketchup";
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
    <main class="alignments">
      <h1>Menu on <bold>{dayWord}</bold><br />
        <br />
        Lunch: {lunch}
        <br /><br /><br />

        <button onClick={navigateToBook} class="button-5" role="button">Book your meal now!</button>
      </h1>
      <div class='bottom' position={"absolute"} height="calc('5vh')" width="100%" zIndex={10}>For more information, contact us at +91 9591062626</div>

    </main>
  )
}
