import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibile] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibile(false);
            console.log("Test");
          }}
        >
          My Alert
        </Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibile(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
