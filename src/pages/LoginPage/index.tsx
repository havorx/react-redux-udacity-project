import { useInitialState } from "../../hooks/useInitialState";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
import logo from "../../assets/vite.svg";
import "./styles.scss";

function LoginPage() {
  const navigate = useNavigate();
  const { users, handleLogin } = useInitialState();
  const [user, setUser] = useState("");

  const listUsers = Object.keys(users).map((id: string) => ({
    value: id,
    label: (users as any)[id].name,
  }));

  const handleChangeUsers = (e: FormEvent<HTMLSelectElement>) => {
    setUser(e.currentTarget.value);
  };

  const handleLoginButton = () => {
    handleLogin(user);
    const queryLocation = new URLSearchParams(window.location.search);
    const paramsUrl = queryLocation.get("url") || "/";
    navigate(paramsUrl);
  };

  return (
    <Card className="mt-3 login-card">
      <Card.Header className="text-center login-card-header">
        <h1>
          <b>Would You Rather!</b>
        </h1>
        <span>Please login</span>
      </Card.Header>
      <Card.Body>
        <Card.Text className="login-btn">Sign In</Card.Text>
        <Form.Select
          aria-label="Default select example"
          onChange={handleChangeUsers}
        >
          <option>Select User</option>
          {listUsers.map((user: { value: string; label: string }) => (
            <option value={user.value} key={user.value}>
              {user.label}
            </option>
          ))}
        </Form.Select>
        <Button
          className="mt-2 login-btn"
          variant="outline-primary"
          onClick={handleLoginButton}
        >
          Sign In
        </Button>
      </Card.Body>
    </Card>
  );
}

export default LoginPage;
