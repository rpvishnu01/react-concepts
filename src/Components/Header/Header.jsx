import "./Header.css";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import reactImg from "../../assets/react-core-concepts.png";

function createRandom() {
  return Math.floor(Math.random() * 3);
}
export default function Header() {
  const description = reactDescriptions[createRandom()];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials!!!!</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
