import { Route, Routes} from 'react-router-dom';
import AddUser from './features/users/AddUser';
import EditUser from './features/users/EditUser';
import UserList from './features/users/UserList';
import './App.css';

function App() {
  return (
    <div className="container mx-auto px-2 mac-w-5xl pt10 md:pd-32">
      <h1 className='text-center font-bold text-2xl text-gray'> CRUD with redux toolkit</h1>
      <Routes>
        <Route path="/" element={<UserList />} />  
        <Route path="/add-user" element={<AddUser />} /> 
        <Route path="/edit-user/:id" element={<EditUser />} /> 
      </Routes>  
    </div>
  );
}

export default App;
