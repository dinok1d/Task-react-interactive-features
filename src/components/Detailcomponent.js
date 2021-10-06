export default function Detailcomponent({ Cookie }) {
  return (
    <div className="center">
      <img className="yellowform" src={Cookie.image} />
      <h4 className="titleform">{Cookie.name}</h4>
      <p className="priceform">{Cookie.price} kd</p>
      <p className="descform">{Cookie.description}</p>
    </div>
  );
}
