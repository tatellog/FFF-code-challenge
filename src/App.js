import {useEffect, useState, useMemo} from 'react'
import UserList from './components/UserList'
import Pagination from './components/Pagination'
import axios from 'axios'


function App() {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState()
  const EVENTS_PER_PAGE = 10;
  // consume API


  const API_URL = 'https://randomuser.me/api/'


  const getUsers = async ({ nat = 'US', results = 200 }) => {
    const response = await fetch(`${API_URL}?nat=${nat}&results=${results}&seed=${'foo-bar'}`);
    return response.json();
  };
  useEffect(() => {
    const fetchData = async() => {
      try {
        setLoading(true)
        setError(null)
        //axios
        const resp = await getUsers({})
        console.log({resp})
        setData(resp.results)
        const page = resp.info.page
        setCurrentPage((page - 1) * EVENTS_PER_PAGE)
      } catch (er) {
        setError(er)
        setLoading(false)
    }
  }
    fetchData()
  }, [])

  const paginationData = useMemo(() => data.splice(currentPage, EVENTS_PER_PAGE), [currentPage, data])

  console.log({paginationData})

  const onChangePage = (page) => {
    setCurrentPage(page)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Users</h1>
        <UserList list={paginationData} loading={loading}/>
        <Pagination page={currentPage} totalPage={EVENTS_PER_PAGE} onChangePage={onChangePage}/>
      </header>
    </div>
  );
}

export default App;
