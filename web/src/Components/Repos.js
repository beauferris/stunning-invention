import React, { useEffect, useState } from 'react';
import RepoCard from './RepoCard';
import './Repos.css';
const repos = () => {
  const url = 'http://localhost:4000/repos';
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [repoData, setRepoData] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(url);
      const myData = await data.json();
      let sortedData = myData;
      sortedData = myData.sort(function (a, b) {
        const c = new Date(a.created_at);
        const d = new Date(b.created_at);
        return d - c;
      });
      setRepoData(sortedData);
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
        forkCount={repo.forks_count}
        creationDate={repo.created_at}
      />
    );
  });

  return <div className="repos">{repoCards}</div>;
};

export default repos;
