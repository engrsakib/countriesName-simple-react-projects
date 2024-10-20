const Deshh = ({desh}) => {
    const{name} = desh;

    return (
      <div className="country">
        <h2>Name: {name.common}</h2>
      </div>
    );
};

export default Deshh;