export default function Banner() {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/dreamy-rainbow-countryside_23-2151625085.jpg?t=st=1729497523~exp=1729501123~hmac=a4fd38b01976763534ef309f41137faffaccf32bcddc05fb1471d39eb86fb952&w=1380"
            className="w-full h-[500px]"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/rest-sunshine-atoll-bungalow-holiday_1232-3876.jpg?t=st=1729497729~exp=1729501329~hmac=f3341728482874631eb04cf8204c929f686d763f6c496197be125062ae5d39bd&w=1380"
            className="w-full  h-[500px]"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/bali-pagoda-indonesia_1150-11021.jpg?t=st=1729497749~exp=1729501349~hmac=170a50910e3a329f915977ffc0ae0644e82e81f15636f8b6049296f6707ddc45&w=1380"
            className="w-full  h-[500px]"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/backpacker-deogyusan-mountains-winter_335224-465.jpg?t=st=1729497786~exp=1729501386~hmac=e8b0d9613790ffd161c92e91eba15487f494b14f849adc1362e6054b960cd8e8&w=1380"
            className="w-full  h-[500px]"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
}
