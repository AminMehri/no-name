import { Link } from "react-router-dom";
import "../css/Login.css";

function RegisterView() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="login-container">
              <h2 className="login-heading">No name</h2>
              <form>
                <div className="mb-3">
                  <label for="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                  />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                  />
                </div>
                <div className="mb-3">
                  <label for="password-confirm" className="form-label">
                    Password confirm
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password-confirm"
                    placeholder="Enter password confirm"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-login btn-block"
                >
                  Register
                </button>
                <Link className="float-end" to="/login">
                  Have an account?
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterView;
