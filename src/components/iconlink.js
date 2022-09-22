import LinkIcon from "../components/icons/link";
import GithubIcon from "../components/icons/github";

const iconList = [<GithubIcon />, <LinkIcon />];

export default function IconLink(props) {
  const { name, link, icon } = props;
  return (
    <a className="icon_link" href={link} alt={name} target="_blank">
      {iconList[icon]}
    </a>
  );
}
