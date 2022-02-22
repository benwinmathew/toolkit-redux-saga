
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersFetch } from './userState'

function App() {
  const users = useSelector(state => state.users.users);
  const loading = useSelector((state) => state.users.isLoading);
  const error = useSelector((state) => state.users.error)
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getUsersFetch())
  }, [dispatch]);

  console.log(users);

  return (
    <>
      <center>User Details</center>
      {users.loading && <p>Loading...</p>}
      {users.length === 0 && !loading && <p>No user available</p>}
      {error && !loading && <p>{error}</p>}
      {users.length > 0 && users.map((user) => 
        <div>{user.id}. {user.name} from {user.company.name} <br/><br/></div>
        )}
    </>
  );
}

export default App;
