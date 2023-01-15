import Movie from "./Movie.jsx";
import "./style/header.css"
import movies from "./movie"
function App() {
  return (
    <div className="App">
      <div>
        <h1 className = "header">Movie Lists and Review</h1>
      </div>

      <div className="main">
        {
          movies.map((element,index) =>{
            return(
              <Movie 
              key = {index}       
              title={element.Title} 
                     year={element.Year} 
                     poster={element.Poster}/>
            );
            
          })
        }
      </div>
    </div>
  );
}

export default App;
