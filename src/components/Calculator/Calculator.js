import React, {useState} from 'react';


const Calculator = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  //const [custom, setCustom] = useState(0);
  const [peopleNum, setPeopleNum] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0); 

  const handleTotals = (e) => {
    e.preventDefault();
    let tipPercent = e.target.value;
    console.log(tipPercent);

  if (!billAmount >= 0 && !tipPercent > 0 && !peopleNum >= 0) {
    setTipAmount("");
    setTotal("");

    } else {
      let tipAmount = (tipPercent * billAmount) / peopleNum;
      let total = +billAmount / peopleNum + tipAmount;

      setTipAmount(tipAmount);
      setTotal(total);
    }
  };

  {/*} const isError = (e) => {
    if(e.target.value <= 0) {
      e.target.parentNode.classList.remove("d-none");
      setTipAmount("");
      setTotal("");
    } else {
      e.target.parentNode.classList.add("d-none");
    }
  };  */}

  const handleReset = () => {
    console.log("RESET");
    
    setBillAmount(0)
    setTipPercent(0);
    setPeopleNum(0);
    setTipAmount(0);
    setTotal(0);
  };



  
  return (
    <div className="app-container d-flex flex-column flex-md-row p-5  mx-auto">
      <div className="inputs pe-md-5 align-self-center">
        <form id="form" action="" >

        {/***** BILL *****/}
            <div className="bill-container mb-5">
              <label htmlFor="bill" className="input-label">Bill</label>
              <div className="d-flex justify-content-between bg-lighter-cyan px-3">
                <div>
                  <img src="./public/icon-dollar.svg" alt="" className="" />
                </div>
                <div>
                  <input className="form-input text-end w-100 fw-700" type="number" value={billAmount} id="bill" name="bill" placeholder="0" onChange={(e) => setBillAmount(e.target.value)}/>
                </div>
              </div>
            </div>

            {/***** TIP BUTTONS *****/}
            <div className="container mb-5">
              <label htmlFor="tips" className="input-label">Select Tip %</label>
              <div id="tip-btns" className="row row-cols-3 row-cols-md-4 justify-content-center">
                  <button className="tip-btn me-3 mb-3" value="0.05" onClick={handleTotals}>5%</button>
                  <button className="tip-btn me-3 mb-3" value="0.10" onClick={handleTotals}>10%</button>
                  <button className="tip-btn me-3 mb-3" value="0.15" onClick={handleTotals}>15%</button>
                  <button className="tip-btn me-3 mb-3" value="0.20" onClick={handleTotals}>20%</button>
                  <button className="tip-btn me-3 mb-3" value="0.25" onClick={handleTotals}>25%</button>
                  <button className="tip-btn me-3 mb-3" value="0.30" onClick={handleTotals}>30%</button>
                 {/* <input type="number" id="tip" value={custom} className="custom-tip me-3 mb-3" placeholder="custom" 
                  onChange={(e) => setCustom(e.target.value)}
                  /> */}
              </div>
            </div>

            {/***** NUMBER OF PEOPLE *****/}
            <div className="person-input mb-5 mb-lg-0">
              <div className="d-flex justify-content-between">
                <label htmlFor="people" className="input-label">Number of people</label>
                <p className="input-label warning d-none">Can't be zero</p>
              </div>
              <div className="d-flex justify-content-between bg-lighter-cyan px-3">
                <div>
                  <img src="" alt="" className="" />
                </div>
                <div>
                  <input className="form-input text-end w-100 fw-700" type="number" value={peopleNum} id="people" name="people" placeholder="0" onChange={(e) => setPeopleNum(e.target.value)}/>
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
              <h2 className="total fw-700" onChange={(e) => setTipAmount(e.target.value)}>${tipAmount.toFixed(2)}</h2>
            </div>
          </div>
          <div className="tip-amount d-flex justify-content-between">
            <div className="tip-text">
              <h3>Total</h3>
              <p>/ person</p>
            </div>
            <div>
              <h2 className="total fw-700">${total.toFixed(2)}</h2>
            </div>
          </div>
            <button 
              className="reset fw-700 w-100 py-3"
              onClick={handleReset}
              >RESET</button>
        </div>
    </div>
  );
};


export default Calculator;