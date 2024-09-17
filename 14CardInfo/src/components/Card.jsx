// Importing the CSS for styling (optional)
import "./Card.css";

const Card = ({
  title,
  description,
  imageUrl,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-buttons">
          <button className="btn btn-primary" onClick={onPrimaryClick}>
            Primary Action
          </button>
          <button className="btn btn-secondary" onClick={onSecondaryClick}>
            Secondary Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
