import "./Component.css";
function B({ name }) {
  return (
    <>
      <h2>{!name ? "Hello World" : name}</h2>
    </>
  );
}
export default B;
