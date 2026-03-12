import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "80px", color: "red" }}>404</h1>
      <h3>Page Not Found</h3>

      <p style={{ color: "gray" }}>
        Oops! Looks like you entered a wrong link.
      </p>

      <p style={{ fontStyle: "italic" }}>
        Our juice is fresh 🍹 but this page is missing 😄
      </p>

      <div className="mt-3">
        <Link to="/">
          <button className="btn btn-dark me-2">Home</button>
        </Link>

        <Link to="/contact">
          <button className="btn btn-outline-dark">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default NoPage;
