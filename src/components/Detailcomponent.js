export default function Detailcomponent({ Cookie }) {
  return (
    <div className="yellowform">
      <img src={Cookie.image} />
      <h4>{Cookie.name}</h4>
      <p>{Cookie.price} KD</p>
      <p>{Cookie.description}</p>
    </div>
  );
}
