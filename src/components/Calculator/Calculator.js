import React from 'react';


function Calculator() {
return (
    <div className="app-container d-flex flex-column flex-lg-row p-5  mx-auto">
      <div className="inputs pe-lg-5 align-self-center">
        <form id="form" action="" >

        {/***** BILL *****/}
            <div className="bill-container mb-5">
              <label htmlFor="bill" className="input-label">Bill</label>
              <div className="d-flex justify-content-between bg-lighter-cyan px-3">
                <div>
                  <img src="./public/icon-dollar.svg" alt="" className="" />
                </div>
                <div>
                  <input className="form-input text-end w-100 fw-700" type="number" id="bill" name="bill" placeholder="0" required />
                </div>
              </div>
            </div>

            {/***** TIP BUTTONS *****/}
            <div className="container mb-5">
              <label htmlFor="tips" className="input-label">Select Tip %</label>
              <div id="tip-btns" className="row row-cols-3 row-cols-md-4 justify-content-center">
                  <button className="tip-btn me-3 mb-3">5%</button>
                  <button className="tip-btn me-3 mb-3">10%</button>
                  <button className="tip-btn me-3 mb-3">15%</button>
                  <button className="tip-btn me-3 mb-3">25%</button>
                  <button className="tip-btn me-3 mb-3">50%</button>
                  <input type="number" id="tip" className="custom-tip me-3 mb-3" placeholder="custom" />
              </div>
            </div>

            {/***** NUMBER OF PEOPLE *****/}
            <div className="person-input mb-5 mb-lg-0">
              <div className="d-flex justify-content-between">
                <label htmlFor="people" className="input-label">Number of people</label>
                <p className="input-label warning ">Can't be zero</p>
              </div>
              <div className="d-flex justify-content-between bg-lighter-cyan px-3">
                <div>
                  <img src="" alt="" className="" />
                </div>
                <div>
                  <input className="form-input text-end w-100 fw-700" type="number" id="people" name="people" placeholder="0" required />
                </div>
              </div>
            </div>
        </form>
      </div>
      {/***** OUTPUTS *****/}
      <div className="outputs">
          <div className="tip-amount d-flex justify-content-between">
            <div className="tip-text">
              <h3>Tip Amount</h3>
              <p>/ person</p>
            </div>
            <div>
              <h2 className="total fw-700">$0.00</h2>
            </div>
          </div>
          <div className="tip-amount d-flex justify-content-between">
            <div className="tip-text">
              <h3>Total</h3>
              <p>/ person</p>
            </div>
            <div>
              <h2 className="total fw-700">$0.00</h2>
            </div>
          </div>
            <button className="reset fw-700 w-100 py-3">RESET</button>
        </div>
    </div>
    )
}



export default Calculator;