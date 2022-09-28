import './RepoCard.css';

const repoCard = (props: any) => {
  return (
    <div className="repoCard">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.language}</p>
      <p>{props.forkCount}</p>
    </div>
  );
};
export default repoCard;
