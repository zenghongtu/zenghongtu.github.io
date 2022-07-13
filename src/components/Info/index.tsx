import avatar from './avatar.png';
import './index.css';

const index = () => {
  return (
    <div className="px-28 py-40">
      <div className="content">
        <div className="avatar-header">
          <a href="/">
            <img className="avatar" src={avatar} />
          </a>
          <div>
            <h1 className="name">Jason Zeng</h1>
          </div>
        </div>
        <p className="py-40">
          <a className="link" href="https://github.com/zenghongtu">
            GitHub
          </a>
          {' · '}
          <a className="link" href="https://blog.jasonzeng.dev">
            Blog
          </a>
          {' · '}
          <a className="link" href="https://blog.jasonzeng.dev/projects">
            Projects
          </a>
        </p>
        <details className="mb-16">
          <summary style={{ cursor: 'pointer', userSelect: 'none' }}>
            Metrics
          </summary>
          <div>
            <img src="./metrics.svg"></img>
          </div>
        </details>
        <div>
          <iframe
            className="gist-iframe"
            src="https://gist.github.com/zenghongtu/4e438abfd13a9ec2c2f2a882bc3c8058.pibb"
          ></iframe>
        </div>
        <iframe
          className="gist-iframe"
          src="https://gist.github.com/zenghongtu/0886c55aba38694add4b38b17d9cb4cb.pibb"
        ></iframe>
      </div>
    </div>
  );
};

export default index;
