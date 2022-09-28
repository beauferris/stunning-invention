import './RepoCard.css';

const repoCard = (props) => {
  return (
    <div className="repoCard">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.language}</p>
      <p>Fork Count: {props.forkCount}</p>
      <p>Created On: {props.creationDate}</p>
    </div>
  );
};
export default repoCard;
