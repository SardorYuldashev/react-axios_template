import style from './dashboard.module.scss';
import Loader from './../../Components/Loader';
import { useState } from 'react';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className={style["dashboard"]}>

      {loading ? <Loader />
        :
        <div className="container">
          <h1 >Dashboard</h1>
        </div>
      }
    </div>
  );
};

export default Dashboard;