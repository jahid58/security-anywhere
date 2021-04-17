import React, { useEffect, useState } from "react";

const HiredCard = ({ hired, statuses }) => {
  const { service, id, image } = hired;
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (statuses) {
      const st = statuses
        .slice()
        .reverse()
        .find((sv) => {
          return sv.id === id;
        });
      setStatus(st);
    }
  }, [statuses]);

  return (
    <div className="col-md-4 text-secondary ">
      <div className="m-1 p-3  rounded shadow text-center bg-light">
        <div className="d-flex  justify-content-around">
          <h5 className="m-2">{service}</h5>
          {status && (
            <h6 className=" bg-success text-white m-2 p-2">
              {" "}
              status: {status.status || "Done"}{" "}
            </h6>
          )}
        </div>
        <div className="bg-white m-3">
          <p>
            {" "}
            <small> Payment id: {id}</small>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HiredCard;
