import "../../assets/styles/card.css";

export function Card(props) {
  const { title, price, description, rate, img } = props;
  return (
    <section className="card-structure">
      <div className="card-container">
        <div className="card-rate">
          <i class="bi bi-star-fill"></i>
          <p>{rate}</p>
        </div>

        <div className="image-container">
          <img
            src={`./src/assets/img/${img}`}
            alt="product-img"
            className="flex-1"
          />
        </div>

        <div className="p-4">
          <div className="card-description-sec1">
            <span className="mb-6">{title}</span>
            <span>${price}</span>
          </div>
          <div className="card-description-sec2">
            <span className="text-[#747579] text-[12px]">
              {description}
              <span className="text-[#1656a6]"> read more</span>
            </span>
            <button className="btn">Buy</button>
          </div>
        </div>
      </div>
    </section>
  );
}
