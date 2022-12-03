import "./styles.css"

export function Card(props) {
  //ou Fazer distruturação Card(name, time) <strong>{name}</strong>
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}
