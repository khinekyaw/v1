export default function Project(props) {
  const { name, imageUrl, tech, links } = props;

  const wrapperStyle = { animationDelay: props.index * 0.3 + "s" };

  const linksEl = links.map((i, idx) => (
    <a
      key={idx}
      href={i.url}
      className="icon_link"
      aria-label={i.name}
      target={"_blank"}
    >
      {i.icon}
    </a>
  ));

  const techEl = tech.map((i) => <li key={i}>{i}</li>);

  return (
    <div className="project_wrapper" style={wrapperStyle}>
      <div className="project_bg">
        <div className="exp_list_item">
          <span></span>
          <span></span>
          <div></div>
        </div>
      </div>
      <div className="project_img_wrapper">
        <img src={imageUrl} alt={"Project " + name}></img>
      </div>
      <div className="project_info">
        <div className="project_header">
          <p className="project_title">{name}</p>
          <div className="project_links">{linksEl}</div>
        </div>
        <ul className="project_tech">{techEl}</ul>
      </div>
    </div>
  );
}
