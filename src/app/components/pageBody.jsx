import React from "react";
import PropTypes from "prop-types";

const PageBody = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item._id} className="row d-flex">
          <div className="col-sm-8">
            <div className="card mb-3 p-0">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.src}
                    className="img-fluid rounded-start"
                    alt={item.alt}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">
                      Стоимость <b>{item.price}</b> р.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 d-flex align-items-center justify-content-center">
            <button type="button" className="btn btn-outline-secondary">
              Открыть карточку товара
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

PageBody.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PageBody;
