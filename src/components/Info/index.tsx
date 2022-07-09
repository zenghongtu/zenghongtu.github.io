import avatar from './avatar.png';
import './index.css';

const index = () => {
  return (
    <div className="px-7 py-10">
      <div className="content">
        <div className="avatar-header">
          <a href="/">
            <img className="avatar" src={avatar} />
          </a>

          <div>
            <h1 className="name">Jason Zeng</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
