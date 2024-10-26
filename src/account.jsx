import { useEffect, useState } from "react";

export default function Account({ currentUser, onUpdateUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setPassword(currentUser.password);
      setShowSuccessMessage(true);

      // Set a timer to hide the message after 10 seconds
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 10000); // 10 seconds

      // Clean up the timer when the component unmounts or currentUser changes
      return () => clearTimeout(timer);
    }
  }, [currentUser]);

  //handle update submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // //destructure  and update data in updateduser
    const upadteUser = { ...currentUser, name, email, password };
    onUpdateUser(upadteUser); //call function and update data

    alert("Data updated successfully");
  };
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="row">
        {showSuccessMessage && (
          <div className="alert alert-success" role="alert">
            Logged in successfully!
          </div>
        )}
        <div>
          <h2 className="text-center">Account Details</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <label htmlFor="name" className="form-label col-form-label">
                Name:
              </label>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="email" className="form-label col-form-label">
                Email:
              </label>
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="password" className="form-label col-form-label">
                Password:
              </label>
              <div className="col">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Update Details
            </button>
            <hr></hr>
            <p style={{ fontWeight: "700", color: "white" }}>
              Back to login <a href="/" style={{ fontWeight: "800" }}>login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
