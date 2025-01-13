import '../styles/ServicesComp.css';

function ServicesComp({ imgURL, name, title, description }) {
  return (
    <div className="ServicesComp">
      <div className = "image-container">      
        <img src={imgURL} className = {name}/>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
      <button className = "services-button">Book Today</button>
    </div>
  );
}

export default ServicesComp;
