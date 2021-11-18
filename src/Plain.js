import "./plain.css";

function Plain() {
  return (
    <body>
      <div>
        <div>
          <div>
            <h1>Task App</h1>
          </div>
          <div>
            <form id="new-task-form">
              <div>
                <label for="new-task-name">Description</label>
                <input type="text" id="task-description" required />
                <div>Looks good!</div>
                <div>Please provide a valid name.</div>
              </div>
              <div group>
                <button type="submit" id="task-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <h3>Tasks:</h3>
        <div>
          <ul id="task-list"></ul>
        </div>
      </div>
    </body>
  );
}

export default Plain;
