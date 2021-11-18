import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <body>
      <div className="d-flex justify-content-center my-5">
        <div>
          <div className="row">
            <h1>Task App</h1>
          </div>
          <div className="row mb-5">
            <form id="new-task-form">
              <div className="form-group">
                <label for="new-task-name">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="task-description"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please provide a valid name.
                </div>
              </div>
              <div className="form-group col">
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="task-submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="task-list-container">
        <h3 className="text-center">Tasks:</h3>
        <div className="d-flex justify-content-center">
          <ul id="task-list" className="list-group"></ul>
        </div>
      </div>
    </body>
  );
}

export default App;
