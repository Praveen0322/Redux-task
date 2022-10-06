import React, {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchPosts} from "./redux/action";
import './App.css';
// import data from "./data.json"

function App() {
  const {posts, loading} = useSelector((state) => ({...state.data}));
  const {search , setSearch} = useState("");
  const dispatch = useDispatch();
  return (
    <center>
    <div className="App">
      <h1>redux</h1> 
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
       <br/> 
      <button onClick={() => dispatch(fetchPosts())}>Fetch Post</button>
      {!loading ? (posts.map((post) => <h3 key={post.id}>{post.id},{post.title}</h3>)
      ) : (<h3>Loading...</h3>)} 
       
    </div>
    <input type="text"></input>
    <div><br/>
    {/* <input>
        <select>
          <option  >hello</option>
          <option>Hiiii</option>
        </select>
    </input> */}
      </div>
    </center>

  );
}

export default App;

