import './App.css';
import ListView from './component/ListView';
import { useEffect,useState } from 'react';
function App() {
  const [isLoading,setIsLoading]=useState(true);
  const [noData,setNoData]=useState(false);
  const [dataCard, setDataCard] = useState([])
  const [filteredData,setFilteredData] = useState(dataCard);
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    // do something
    const response = await fetch('https://my-json-server.typicode.com/glendmaatita/userjsondemo/db');
    const data = await response.json();
    setDataCard(data.data);
    setFilteredData(data.data);
    setIsLoading(false);
  }
  const onChangeDataHandler =(e)=> {
    let value = e.target.value;
    let result =[];
    result=dataCard.filter((data) => {
      return data.name.search(value) !== -1 || data.username.search(value) !== -1 || data.email.search(value) !== -1 ;
      });
    setFilteredData(result);
    if (value && result.length===0) {
      setNoData(true)
    } else {
      setNoData(false)
    }
  }
  
  return (
    <main>
      <h4>Wendroandy Test</h4>
      <section>
        <h5>List User</h5>
        <input type="text" onChange={onChangeDataHandler} placeholder="name,username and email.."/>
        <hr/>
        {isLoading && <p align="center">Loading..</p>}
        {noData && <p align="center">No Data</p>}
        <ListView data={filteredData ? filteredData : dataCard  }/>
      </section>
    </main>    
  );
}

export default App;
