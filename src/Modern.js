import { Container, Stack } from '@mui/material';
import Button from '@mui/material/Button';

function Plain() {
  return (
    <Container maxWidth="sm">
      <Stack spacing={10}>
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
                <Button type="submit" variant="contained" id="task-submit">
                  Submit
                </Button>
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
      </Stack>
    </Container>
  );
}

export default Plain;
