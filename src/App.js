import React, {useState, useEffect} from 'react';
import './App.css';
import Profile from './components/profile';
import Filter from './components/filter'
import SearchBar from './components/searchBar';
import Pagination from './components/pagination';
import axios from 'axios';

const App = () => {
  const [profile, setProfile] = useState([]);
  const [total, setTotal] = useState();
  // const [pageSize, setPageSize] = useState(20)
  const [pageNumber, setPageNumber] = useState(1)

  console.log(profile);
  const getRecords = () => {
      axios.get(`https://api.enye.tech/v1/challenge/records`)
      .then(response => {
        const {size, records:{ profiles }} = response.data;
        setProfile(profiles);
        setTotal(size)
      }).catch(error => {
        console.log(error);
      });  
  }

  const paginate = (pageNumber) => setPageNumber(pageNumber)

  const filterByGender = (gender) => {
    switch(gender) {
      case 'Male':
        setProfile(profile.filter(person => person.Gender === 'Male'));
        break;
      case 'Female':
        setProfile(profile.filter(person => person.Gender === 'Female'));
        break;
      default:
        setProfile(profile.filter(person => person.Gender === 'Prefer to skip'));
    } 
  }

    const indexOfLastProfile = pageNumber * 20;
    const indexOfFirstProfile = indexOfLastProfile - 20;
    const currentProfile = profile.slice(indexOfFirstProfile, indexOfLastProfile);

  useEffect(() => {
    getRecords();
  }, [])

  return (
    <div className="container-fluid App-bg">
      <div className="row">
        <SearchBar />
      </div>
      <div className="row">
        <Filter />
      </div>  
      <div className="row">
        <Profile profile={currentProfile}/>
      </div> 
      <div className="row">
        <Pagination paginate={paginate} total={total} pageSize={20}/>
      </div>    
    </div>
  );
}

export default App;