import logo from './logo.svg';
import './App.css';
import MainNav from './components/MainNav';
import { useEffect, useState } from 'react';
function App() {
  const [carData, setCarData] = useState();

  useEffect(() => {
    let accessKey = "5lZkXL_h0_mN98HrHFAkCxQy76KAjr7cuCfbp66Rvjo";
//capture search term 
const searchTerm = "cars";

const resource = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=20&client_id=${accessKey}`;

//make a request to unsplash api
//capture the api data
fetch(resource)
.then((res) => res.json())
.then((data) => {
  setCarData(data.results)});
}, []);

return (
  
<div className="App">
{/* Add a navbar */}
<MainNav />
{/* Add card container */}
<div className="card-container">
  {carData &&
    carData.map((data, index) => (
     
      <p key={index}>{data.alt_description}</p>
    ))}
</div>
</div>
);
}

export default App;

