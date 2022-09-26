import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  const label_mod = `${props.label}`;

  const obrigatorio = `${props.required}`
  const valor = `${props.valor}`

  return (
        <div className="lista-suspensa">
            <label>
              {label_mod}
            </label>

            <select 
              onChange={evento => props.Alterar(evento.target.value)}
              required={obrigatorio} 
              value={valor}>
                {
                  props.item.map(
                    item =>
                    <option key={item}>
                      {item}
                    </option>
                  )
                }
            </select>

        </div>
  );
};

export default ListaSuspensa;
