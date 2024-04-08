function ProductItem({ image, title }) {
  return (
    <div className="product__card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

export default ProductItem;
