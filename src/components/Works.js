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
            <a href="https://findashboard2345.onrender.com/" target="_blank" rel="noreferrer">
              View live site
            </a>
            <a
                href="https://github.com/jvorndran/stock_watchlist"
                target="_blank"
                rel="noreferrer"
            >
              View repository
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
              href="https://flask-project-1e1de9b3e5d3.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              View live app
            </a>
            <a
              href="https://github.com/jvorndran/DeMark_Screener_Website"
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
          <h3>Earnings Insights Website</h3>
          <p>
            Allows you to see upcoming earnings, implied moves, earnings estimates, etc. Built with <em>Angular</em> and <em>Django</em>
          </p>
          <div className="work-buttons">
            <a
              href="https://earnings-site-ecd7d0fe9d3a.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              View live app
            </a>
            <a
              href="https://github.com/jvorndran/earnings_site"
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
