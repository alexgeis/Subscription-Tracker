import WelcomeScreen from "../Welcome/Welcome";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Settings/settings.css";

function SettingsPage() {
    return (
        <Container>
        <h1 style={styles.heading}>Settings</h1>
        <p style={styles.button}>Place Holder User</p>
        <p>Place Holder Password</p>
        <ButtonGroup>
        {radios.map((radio, idx) => (
            <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? "dark" : "light"}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
            {radio.name}
            </ToggleButton>
        ))}
        </ButtonGroup>
        <p>Place Holder Name</p>
        <div className="mb-2">
        <Button variant="primary" size="lg">
            Home
        </Button>{" "}
        <Button variant="danger" size="lg">
            Logout
        </Button>
        <div>
        <a id="buttonInstall" role="button">Install!</a>
        </div>
        </div>
    </Container>
    )
}

export default SettingsPage;