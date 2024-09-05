import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function SearchBar({ handleSearch }) {
  const [city, setCity] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const value = city.trim();
    if (value.length) {
      handleSearch(value);
    }
  };
  return (
    <Form onSubmit={onFormSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter City Name"
          aria-label="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <Button variant="info" size="lg" type="submit">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
}
