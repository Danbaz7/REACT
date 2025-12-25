import reactImg from "../assets/react-core-concepts.png";
// import { CORE_CONCEPTS } from "../data.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(maxRandomNum) {
  return Math.floor(Math.random() * (maxRandomNum + 1));
}

export function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
