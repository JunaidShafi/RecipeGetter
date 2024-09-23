export default function Fooditem({ food }) {
  return (
    <div>
      <h3>{food.title}</h3>
      <img src={food.image} alt={food.name} />
      <br />
      <button>View Recipe</button>
    </div>
  );
}
