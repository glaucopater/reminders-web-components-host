import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Reminders Dashboard</h1>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default Home;
