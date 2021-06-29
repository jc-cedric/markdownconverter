import MarkdownEditor from "./components/MarkdownEditor"
import { Container, Row } from 'react-bootstrap'

function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <div className="App">
          <MarkdownEditor/>
        </div>
      </Row>
    </Container>
  );
}

export default App;
