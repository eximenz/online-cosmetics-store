import React from "react";
import PropTypes from "prop-types";
// import _ from "lodash";
// import { Link } from "react-router-dom";

const TableBody = ({ data, columns }) => {
  // const renderContent = (item, column) => {
  //   if (column === "name") {
  //     return <Link to={`/users/${item._id}`}>{item.name}</Link>;
  //   }
  //   if (columns[column].component) {
  //     const component = columns[column].component;

  //     if (typeof component === "function") {
  //       return component(item);
  //     }
  //     return component;
  //   }
  //   return _.get(item, columns[column].path);
  // };

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
    // {/* // <tbody>
    // //   {data.map((item) => ( */}
    //     <tr key={item._id}>
    //       {Object.keys(columns).map((column) => (
    //         <td key={column}>{renderContent(item, column)}</td>
    //       ))}
    //     </tr>
    //   ))}
    // </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.object.isRequired,
};

export default TableBody;
