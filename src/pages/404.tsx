import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="NotFound">
      <section className="section">
        <div className="container">
          <h1>Page Not Found</h1>
          <Link to="/">
            <button className="btn btn-success">HOME</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;

{
  /* <section className="section">
        <div className="container">
          <h1>Page Not Found</h1>
          <Link to="/">
            <button className="btn btn-success">HOME</button>
          </Link>
        </div>
      </section> */
}
