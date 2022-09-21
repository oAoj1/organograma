import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  const label_mod = `${props.label}`;

  return (
        <div className="lista-suspensa">
            <label>{label_mod}</label>
            <select>
                {props.item.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
  );
};

export default ListaSuspensa;
