import projects from '../../data/projects.json';
import './index.css';

const index = () => {
  return (
    <div className="projects">
      <details className="py-40" open>
        <summary
          className="mb-16"
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          Projects
        </summary>
        <div className="items">
          {projects.map((item) => {
            const { url, username, repo } = item;
            return (
              <a href={url} target="_blank" key={url}>
                <img
                  width="100%"
                  title={url}
                  src={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo}`}
                ></img>
              </a>
            );
          })}
        </div>
      </details>
    </div>
  );
};

export default index;
