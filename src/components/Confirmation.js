import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const {state} = useLocation();

  return (
    <div className="container">
      <h1>Thank You, <strong>{state.name}</strong>!</h1>
      {state && (
        <>
          <p>You're now registered for <strong>{state.course}</strong>.</p>
          <p>
            We've emailed more details to you at <strong>{state.email}</strong>
          </p>
        </>
      )}
    </div>
  );
}
