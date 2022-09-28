import React, { useEffect, useState } from 'react';
import RepoCard from './RepoCard';
import './Repos.css';
const repos = () => {
  const url = 'http://localhost:4000/repos';
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [repoData, setRepoData] = useState<any[]>([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(url);
      const myData = await data.json();
      setRepoData(myData);
    };
    getData();
  }, [repoData]);

  const repoCards = repoData.map((repo) => {
    return (
      <RepoCard
        key={repo.id}
        name={repo.name}
        description={repo.description}
        language={repo.language}
      />
    );
  });

  return <div className="repos">{repoCards}</div>;
};

export default repos;
