import stockWatchlist from "../images/projects/stock_watchlist.png";
import earningsSite from "../images/projects/earnings.png"
import screener from "../images/projects/screener.png"

function Works() {
  return (
    <div className="works">
      <h2>Works</h2>
      <article className="light">
        <div className="text">
          <h3>Stock Watchlist</h3>
          <p>
            Multi Page website that allows users to view markets and make a watchlist built with <em>React</em>,{" "}
            <em>Node</em> <em>Express</em> and <em>MongoDB</em>.
          </p>
          <div className="work-buttons">
            <a href="https://leatra.com/" target="_blank" rel="noreferrer">
              View live site
            </a>
          </div>
        </div>
        <div className="image">
          <img src={stockWatchlist} alt="" />
        </div>
      </article>
      <article className="dark">
        <div className="text">
          <h3>Stock Market Screener</h3>
          <p>
            Screens over 7,000 stocks for DeMark&#8482; Indicators. Built with <em>Flask</em> and <em>Vanilla Javascript</em>.
          </p>
          <div className="work-buttons">
            <a
              href="https://a-adeleye.github.io/cv-maker/"
              target="_blank"
              rel="noreferrer"
            >
              View live app
            </a>
            <a
              href="https://github.com/a-adeleye/cv-maker"
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </div>
        </div>
        <div className="image">
          <img src={screener} alt="" />
        </div>
      </article>

      <article className="light">
        <div className="text">
          <h3>Earnings Watcher Website</h3>
          <p>
            Allows you to see upcoming earnings, implied moves, earnings estimates, etc. Built with <em>Angular</em> and <em>Django</em>
          </p>
          <div className="work-buttons">
            <a
              href="https://a-adeleye.github.io/e-commerce/"
              target="_blank"
              rel="noreferrer"
            >
              View live app
            </a>
            <a
              href="https://github.com/a-adeleye/e-commerce"
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </div>
        </div>
        <div className="image">
          <img src={earningsSite} alt="" />
        </div>
      </article>
    </div>
  );
}

export default Works;
