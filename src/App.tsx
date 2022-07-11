import React from "react";
import "./App.css";
import {Form, Formik} from "formik";

function App() {
  return (
    <div className="App">
        <Formik
          initialValues={{ name: "" }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2))
          }}
        >{({ formik }) =>
            <form>
                <pre>{JSON.stringify(values, null, 2)}</pre>
            </form>
            )}
    </Formik>
    </div>
  );
}

export default App;
