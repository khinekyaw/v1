export default function Position({ company, position, start, end }) {
  return (
    <div className="exp_list_item">
      <span></span>
      <span></span>
      <div></div>
      <p>
        {position} <a>@ {company}</a>
      </p>
      <i>
        {start} - {end}
      </i>
    </div>
  )
}