import { useState, useEffect } from "react";
import axios from "axios";

const GitHubRepoCount = ({ username }) => {
  const [repoCount, setRepoCount] = useState(0);

  useEffect(() => {
    const fetchRepoCount = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        const repositories = response.data;
        setRepoCount(repositories.length);
      } catch (error) {
        console.error("GitHub API'sinden repo sayısı alınamadı", error);
      }
    };

    fetchRepoCount();
  }, [username]);

  return (
    <div>
      <h1>{repoCount}</h1>
    </div>
  );
};

export default GitHubRepoCount;
