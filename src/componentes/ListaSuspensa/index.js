import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
        <div className="lista-suspensa">
            <label>
              {props.label}
            </label>

            <select 
              onChange={evento => props.Alterar(evento.target.value)}
              required={props.required} 
              value={props.valor}>
                {props.alternativas.map(item =>
                    <option key={item}>
                      {item}
                    </option>
                )}
                <option value=""></option>
            </select>

        </div>
  );
};

export default ListaSuspensa;
