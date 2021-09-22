import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/Button";
import logo from "./logo.svg";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <h1>Welcome to PatUI</h1>
      <h3>Default</h3>
      <Button>Default</Button>
      <Button disabled>Default Disabled</Button>
      <h3>Sizes</h3>
      <Button buttonSize={ButtonSize.Large}>Large Button</Button>
      <Button buttonSize={ButtonSize.Small}>Small Button</Button>
      <Button buttonSize={ButtonSize.Small} disabled>
        Small Button Disabled
      </Button>
      <h3>Types</h3>
      <Button>Default Button</Button>
      <Button buttonType={ButtonType.Primary}>Primary Button</Button>
      <Button buttonType={ButtonType.Secondary}>Secondary Button</Button>
      <Button buttonType={ButtonType.Danger}>Danger Button</Button>
      <Button buttonType={ButtonType.Link} href="https://www.google.com">Link Button</Button>
      <Button buttonType={ButtonType.Link}  disabled href="https://www.google.com">Link Button Disabled</Button>
    </div>
  );
}

export default App;
