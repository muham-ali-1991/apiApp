import { useState } from 'react';
import './App.css';

function App() {

  const [homeData, sethomeData] = useState([]);

  const loadHome = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const conv = await res.json();
    sethomeData(conv);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ApiApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={loadHome}>Load Posts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        {
          homeData.map((d) => (
            <div key={d.id} className="card">
              < div className="card-body">
                < h5 className="card-title">{d.title}</h5>
                <p className="card-text">{d.body}</p>
              </div>
            </div>
          ))
        }
      </div>

      

    </>
  )
}

export default App;
