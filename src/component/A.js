import "./Component.css";
function A({ name }) {
  return (
    <>
      <h2>{!name ? "" : name}</h2>
    </>
  );
}
export default A;
