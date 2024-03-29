import './index.css';

const index = () => {
  return (
    <div className="px-28 py-40">
      <div className="content">
        <details className="mb-16 metrics">
          <summary style={{ cursor: 'pointer', userSelect: 'none' }}>
            Metrics
          </summary>
          <div>
            <img width="100%" src="./metrics.svg"></img>
          </div>
        </details>
        <div className="gist-iframe">
          <iframe
            frameBorder="0"
            scrolling="no"
            height="100%"
            src="https://gist.github.com/zenghongtu/4e438abfd13a9ec2c2f2a882bc3c8058.pibb"
          ></iframe>
        </div>
        <div className="gist-iframe">
          <iframe
            frameBorder="0"
            scrolling="no"
            height="100%"
            src="https://gist.github.com/zenghongtu/0886c55aba38694add4b38b17d9cb4cb.pibb"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default index;
