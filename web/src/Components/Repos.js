import React, { useEffect, useState } from 'react';
import RepoCard from './RepoCard';
import './Repos.css';
const repos = () => {
  const url = 'http://localhost:4000/repos';
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [repoData, setRepoData] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [filteredData, setFilteredData] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(url);
      const myData = await data.json();
      const sortedData = myData.sort(function (a, b) {
        const c = new Date(a.created_at);
        const d = new Date(b.created_at);
        return d - c;
      });
      setRepoData(sortedData);
      setFilteredData(sortedData);
    };
    getData();
  }, []);

  const repoCards = filteredData.map((repo) => {
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

  const filterData = (event) => {
    let repoCopy = [...repoData];
    repoCopy = repoCopy.filter(
      (repo) => repo.language === event.currentTarget.value
    );
    setFilteredData(repoCopy);
  };
  const clearFilter = () => {
    setFilteredData(repoData);
  };

  const languages = repoData.map((data) => data.language);
  const languageFilter = [...new Set(languages)].map((language) => {
    return (
      <button key={language} value={language} onClick={filterData}>
        {language}
      </button>
    );
  });

  return (
    <>
      <button onClick={clearFilter}>ALL</button>
      {languageFilter}
      <div className="repos">{repoCards}</div>
    </>
  );
};

export default repos;
