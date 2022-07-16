import { Link } from 'react-router-dom';
import './index.css';

const index = () => {
  return (
    <div>
      <Link className="avatar-header mt-40" to="/">
        <a>
          <img className="avatar" src="/avatar.png" />
        </a>
        <div>
          <h1 className="name">Jason Zeng</h1>
        </div>
      </Link>
      <p className="py-40">
        <a
          className="link"
          target="_blank"
          href="https://github.com/zenghongtu"
        >
          GitHub
        </a>
        {' · '}
        <a className="link" target="_blank" href="https://blog.jasonzeng.dev">
          Blog
        </a>
        {' · '}
        <Link className="link" to="/projects">
          Projects
        </Link>
      </p>
    </div>
  );
};

export default index;
