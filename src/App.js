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
  const [pageNumber, setPageNumber] = useState(1)
  const [toBeFiltered, setToBeFiltered] = useState(profile)

  console.log(profile);
  const getRecords = () => {
      axios.get(`https://api.enye.tech/v1/challenge/records`)
      .then(response => {
        const {size, records:{ profiles }} = response.data;
        setProfile(profiles);
        setToBeFiltered(profiles)
        setTotal(size)
      }).catch(error => {
        console.log(error);
      });  
  }

  const paginate = (pageNumber) => setPageNumber(pageNumber)

  const searchRecord = (text) => {
    // console.log(filtered)
    // if(text === ""){
    //   // display all records
    // }else{
    // setProfile(filtered.fin)
    // }
  }

  const filterBy = (params) => {
    switch(params) {
      case 'Male':
        setProfile(toBeFiltered.filter(person => person.Gender === 'Male'));
        break;
      case 'Female':
        setProfile(toBeFiltered.filter(person => person.Gender === 'Female'));
        break;
      case 'Prefer to skip':
        setProfile(toBeFiltered.filter(person => person.Gender === 'Prefer to skip'));
        break;
      case 'money order':
        setProfile(toBeFiltered.filter(person => person.PaymentMethod === 'money order'));
        break;
      case 'check':
        setProfile(toBeFiltered.filter(person => person.PaymentMethod === 'check'));
        break;
      case 'paypal':
        setProfile(toBeFiltered.filter(person => person.PaymentMethod === 'paypal'));
        break;
      default: 
        setProfile(toBeFiltered.filter(person => person.PaymentMethod === 'cc'));
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
        <h5 className="align-center">Enye User Records</h5>
      </div>
      <div className="row">
        <SearchBar searchRecord={searchRecord}/>
      </div>
      <div className="row">
        <Filter filterBy={filterBy} />
      </div>  
      <div className="row">
        <Profile profile={currentProfile}/>
      </div> 
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-12 col-md-4">
          <Pagination paginate={paginate} total={total} pageSize={20}/>
        </div>
        <div className="col-md-4"></div>
      </div>    
    </div>
  );
}

export default App;