import React, {useState, useEffect} from 'react';
import './App.css';
import Profile from './components/profile';
import Filter from './components/filter'
import SearchBar from './components/searchBar';
import Pagination from './components/pagination';
import axios from 'axios';
import Spinner from './components/spinner';

const App = () => {
  const [profile, setProfile] = useState([]);
  const [total, setTotal] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [toBeFiltered, setToBeFiltered] = useState(profile);
  const [loading, setLoading] = useState(true);

  // fetch the profile records from the enye API
  const getRecords = () => {
      axios.get(`https://api.enye.tech/v1/challenge/records`)
      .then(response => {
        const {size, records:{ profiles }} = response.data;
        setProfile(profiles);
        setToBeFiltered(profiles);
        setTotal(size);
        setLoading(false);
      }).catch(error => {
        console.log(error);
      });  
  }

  // paginate the records into multiple pages display 20 record at a time
  const paginate = (pageNumber) => setPageNumber(pageNumber)

  // search for a specific record
  const searchRecord = (text) => {
    if(text === ""){
      setProfile(toBeFiltered);
      setTotal(toBeFiltered.length)
    }else{
      const results = toBeFiltered.filter(person => person.LastName.toLowerCase() === text.toLowerCase() || person.FirstName.toLowerCase() === text.toLowerCase())
      setProfile(results);
      setTotal(results.length);
    }
  }

  // filter the records by gender and payment methods 
  const filterBy = (params) => {
    switch(params) {
      case 'Male':
        const males = toBeFiltered.filter(person => person.Gender === 'Male');
        setProfile(males);
        setTotal(males.length);
        break;
      case 'Female':
        const females = toBeFiltered.filter(person => person.Gender === 'Female')
        setProfile(females);
        setTotal(females.length);
        break;
      case 'Prefer to skip':
        const prefer = toBeFiltered.filter(person => person.Gender === 'Prefer to skip')
        setProfile(prefer);
        setTotal(prefer.length);
        break;
      case 'money order':
        const money = toBeFiltered.filter(person => person.PaymentMethod === 'money order')
        setProfile(money);
        setTotal(money.length);
        break;
      case 'check':
        const checks = toBeFiltered.filter(person => person.PaymentMethod === 'check')
        setProfile(checks);
        setTotal(checks.length);
        break;
      case 'paypal':
        const paypals = toBeFiltered.filter(person => person.PaymentMethod === 'paypal')
        setProfile(paypals);
        setTotal(paypals.length);
        break;
      default: 
        const cc = toBeFiltered.filter(person => person.PaymentMethod === 'cc');
        setProfile(cc);
        setTotal(cc.length);
    } 
  }

  // pagination logic
  const indexOfLastProfile = pageNumber * 20;
  const indexOfFirstProfile = indexOfLastProfile - 20;
  const currentProfile = profile.slice(indexOfFirstProfile, indexOfLastProfile);

  // calls the getRecords method on page load 
  useEffect(() => {
    getRecords();
  }, [])

  return (
    <div className="container-fluid App-bg">
      <div className="row">
        <div className="col-12 mt-5">
        <h2 className="text-center" style={{fontFamily:'Arial', color:'#ffff'}}>User Profiles</h2>
        </div>
      </div>
      <div className="row">
        <SearchBar searchRecord={searchRecord}/>
      </div>
      <div className="row">
        <Filter filterBy={filterBy} />
      </div>  
      <div className="row">
        <div className="col-12">
          {!loading ? <Profile profile={currentProfile} /> : <Spinner/> }
        </div>
      </div> 
      <div className="row">
        <div className="col-md-5"></div>
        <div className="col-12 col-md-4">
          {profile && profile.length !== 0 ? <Pagination paginate={paginate} total={total} pageSize={20}/> : null}
        </div>
      </div>    
    </div>
  );
}

export default App;