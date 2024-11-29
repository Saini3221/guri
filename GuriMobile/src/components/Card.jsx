import PropTypes from "prop-types";

function Card({ img, phoneName, price }) {
  return (
    <div className="flex flex-col">
      <div className="flex bg-slate-100 justify-center items-center w-[40vh] h-[48vh] rounded-lg">
        <div className="flex flex-col justify-between">
          <div className="flex justify-center items-center border rounded-md border-black w-fit px-[2vh]">
            <h1>Sale</h1>
          </div>

          <div className="w-[25vh] flex justify-center items-center h-[35vh] m-[2vh]">
            <img src={img} alt={phoneName} className="w-fit h-[100%]" />
          </div>
        </div>
      </div>

      <div className="text-white">
        <p>{phoneName}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  phoneName: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Card;
