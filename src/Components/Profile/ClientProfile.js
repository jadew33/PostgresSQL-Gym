// import { Link } from "react-router-dom";

export default function ClientProfile(props) {
  return (
    <div>
      <h1>Manage your profile</h1>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" name="name" />

      <label htmlFor="age">age: </label>
      <input type="text" id="age" name="age" />

      <label htmlFor="gender">gender: </label>
      <input type="text" id="gender" name="gender" />

      <label htmlFor="address">address: </label>
      <input type="text" id="address" name="address" />

      <label htmlFor="fitnessLevel">fitnessLevel: </label>
      <input type="text" id="fitnessLevel" name="fitnessLevel" />

      <label htmlFor="hoursPerWeek">hoursPerWeek: </label>
      <input type="text" id="hoursPerWeek" name="hoursPerWeek" />

      <label htmlFor="interests">interests: </label>
      <input type="text" id="interests" name="interests" />
    </div>
  );
}
