import "./Component.css";
function B({ name }) {
  console.log("B");
  return (
    <>
      <h2>{!name ? "Hello World" : name}</h2>
    </>
  );
}
export default B;
