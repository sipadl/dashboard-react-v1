import React from "react";

export const Chart = ({name}) => {
  return (
    <div className="box mt-4">
      <div className="group">
        <div className="overlap">
          <div className="medium-pie-chart">
            <div className="title">
              <div className="text-wrapper">{name}</div>
              <div className="div">Total :&nbsp;&nbsp;42</div>
            </div>
            <div className="frame">
              <div className="text-wrapper-2">45</div>
              <div className="text-wrapper-3">40</div>
              <div className="text-wrapper-3">35</div>
              <div className="text-wrapper-3">30</div>
              <div className="text-wrapper-3">25</div>
              <div className="text-wrapper-3">20</div>
            </div>
          </div>
          <div className="group-2">
            <div className="overlap-group">
              <img className="vector" alt="Vector" src="vector-13.svg" />
              <div className="group-3">
                <div className="ellipse-wrapper">
                  <div className="ellipse" />
                </div>
                <div className="chart-hover-badge">
                  <div className="semi-rounded-badge">
                    <div className="div-wrapper">
                      <div className="text-wrapper-4">42</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-2">11 Mar</div>
                <div className="text-wrapper-2">12 Mar</div>
                <div className="text-wrapper-2">13 Mar</div>
                <div className="text-wrapper-2">14 Mar</div>
                <div className="text-wrapper-2">15 Mar</div>
                <div className="text-wrapper-2">16 Mar</div>
                <div className="text-wrapper-2">17 Mar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
