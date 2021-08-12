import Proptypes from "prop-types";

function Food({name,picture,rating}){
  return<div>
    <h1>I love {name}</h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}></img>
  </div> 
}

const foodILike = [
  { 
    id:1,
    name: "strawberry",
    image: "https://jooinn.com/images/a-single-strawberry-4.jpg",
    rating: 4.3

  },
  {
    id:2,
    name: "apple",
    image: "https://www.thetreecenter.com/c/uploads/red-delicious-apple-tree-1.jpg",
    rating: 4.5
  },
  {
    id:3,
    name: "banana",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cavendish_Banana_DS.jpg/1920px-Cavendish_Banana_DS.jpg",
    rating: 4.2 
  }
    
]

Food.propTypes = { //함수명은 반드시 propTypes이어야 작동함
  name: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating: Proptypes.number.isRequired
}

function App() {
  return (
    <div className="App">
    { foodILike.map(obj => (<Food name={obj.name} picture ={obj.image} rating ={obj.rating} key={obj.id}></Food>))}
    </div>
  );
} 

export default App;
