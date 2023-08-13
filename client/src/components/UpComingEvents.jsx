import React from 'react'


function UpComingEvents() {


  const events = [
    {
      id: "01",
      image: "event-02.jpg",
      
      dec: "Milan Tigers vs. Inter City",
      date:6,
      month:"Sep",
    },
    {
      id: "02",
      image: "events.jpg",
     
      dec: "Gunner United vs. London Spurs",
      date:11,
      month:"Sep",
    },
    {
      id: "03",
      image: "event-03.jpg",
      
      dec: "Phoenix Flames vs. Aurora Aces",
      date:14,
      month:"Sep",
    },{
      id: "04",
      image: "event-04.jpg",
      
      dec: "Emerald Titans vs. Crimson Knights",
      date:20,
      month:"Sep",
    },
    
  ];

  return (
    <>
      <div className="container-fluid text-center my-4 py-4 bg-success-subtle">
      <h4 className=" color5 letter-space1 text-center dashed-border corinthia">
      Up-Coming Tournaments
        </h4>
    
        <p className="pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          {" "}
          Fermentum iaculis eu non diam phasellus vestibulum lorem dictumst
          quisque.
        </p>
       
        <div className="container m-auto  row row-cols-1 row-cols-lg-4 row-cols-md-2 ">
          {events &&
            events.map((m, index) => {
              return (
                <div className="col p-2" key={index}>
                  <img
                    className="w-100 img-fluid p-2 "
                    style={{ width: "auto", height: "15rem" }}
                    src={require(`./../Images/${m.image}`)}
                    alt=""
                  />
                 
                 
                  <div className="d-flex mt-2 ps-2 bg-white text-center align-items-center ">
                  <div class="d-flex flex-column p-3 text-white" style={{ backgroundColor: "#1aa670"}}>
                  <h5 className=" fw-semibold letter-space1">{m.date}</h5>
                  <h6 className=" fw-light text-uppercase letter-space1">{m.month}</h6>
                  </div>
                  <h6 className="ls-1 ms-2 me-2 text-capitalize fw-light letter-space1 lh-base">{m.dec}</h6>
                  
                  </div>
                </div>
              );
            })}
        </div>
            
       
      </div>

    </>
  );
}


export default UpComingEvents