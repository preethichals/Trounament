import React from 'react'

function CompletedEvents() {
  const events = [
    {
      id: "01",
      image: "winner.jpg",
      
      dec: "Golden Hawks winner",
      date:18,
      month:"Jul",
    },
    {
      id: "02",
      image: "event-02.jpg",
     
      dec: "Scarlet Storm winner",
      date:15,
      month:"Jul",
    },
    {
      id: "03",
      image: "event-03.jpg",
      
      dec: "Crimson Knights winner",
      date:12,
      month:"Jul",
    },{
      id: "04",
      image: "event-04.jpg",
      
      dec: "Scarlet Storm winner",
      date:9,
      month:"Jul",
    },
     {
      id: "05",
      image: "event-03.jpg",
      
      dec: "Merseyside Blues winner",
      date:7,
      month:"Jul",
    },
    {
      id: "06",
      image: "events.jpg",
     
      dec: "Strikers United winner",
      date:4,
      month:"Jul",
    },
    {
      id: "07",
      image: "event-02.jpg",
      
      dec: "Milan Tigers Winner",
      date:28,
      month:"Jun",
    },{
      id: "08",
      image: "winner.jpg",
      
      dec: "Inter City Winner",
      date:24,
      month:"Jun",
    },
    
  ];

  return (
    <>
      <div className="container text-center my-4">
      <h4 className=" color5 letter-space1  text-center dashed-border corinthia">
      Completed Tournaments
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
       
        <div className="container m-auto row row-cols-1 row-cols-lg-4 row-cols-md-2 ">
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
                 
                 
                  <div className="d-flex mt-2 ps-2 bg-body-secondary align-items-center">
                  <div class="d-flex flex-column bg-danger p-3 text-white">
                  <h5 className=" fw-semibold letter-space1">{m.date}</h5>
                  <h6 className=" fw-light text-uppercase letter-space1">{m.month}</h6>
                  </div>
                  <h6 className="ls-1 ms-2 me-2 fw-bold text-capitalize fw-light letter-space1 lh-base">{m.dec}</h6>
                  
                  </div>
                </div>
              );
            })}
        </div>
 
      </div>

    </>
  );
}


export default CompletedEvents