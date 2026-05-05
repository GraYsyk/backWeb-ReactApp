import { Link } from "react-router";
import { Footer } from "./Footer";

export function Shell() {
  return (
    <div className="shell">
      <div className="view fadein active" id="view-landing">

        <div className="breadcrumb">
          <span className="bc-link">home</span>
          <span className="bc-sep">/</span>
          <span className="bc-active">index</span>
        </div>

        <div className="hero">
          <div className="hero-left">
            <div className="hero-lable"> -- ENDPOINT: GET  /</div>
            <div className="hero-title">Welcome Back.</div>
            <div className="hero-subtitle">
              user_registration_system &middot; public interface<br />
              Please create an account to continue.
              Make sure cookies are turned off. We're allergic to them.
            </div>
            <Link to="/page01">
              <button className="hero-btn">
                POST /REGISTER
              </button>
            </Link>
          </div>
          <div className="hero-right">
            <div className="stats-box">
              <div className="stats-box-header">
                <span>sys_stats &middot; live</span>
                <span className="chip chip-green">RUNNING</span>
              </div>
              <table className="stats-table">
                <thead>
                  <tr>
                    <th>METRIC</th>
                    <th>VALUE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>users_total</td><td className="val">14,302</td></tr>
                  <tr><td>registered_today</td><td className="val">47</td></tr>
                  <tr><td>failed_attempts</td><td className="val warn">312</td></tr>
                  <tr><td>smtp_queue</td><td className="val warn">18</td></tr>
                  <tr><td>db_connections</td><td className="val">4 / 10</td></tr>
                  <tr><td>uptime</td><td className="val">3d 14h 22m</td></tr>
                  <tr><td>last_deploy</td><td className="val">2024-11-02</td></tr>
                  <tr><td>env</td><td className="val warn">PROD ?</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="page-section">
          <div className="section-header">
            <span className="section-title">AVAILABLE_ROUTES</span>
            <span className="section-meta">-- router::map()</span>
            <span className="section-id">module: routes/web.php</span>
          </div>

          <div className="table-wrap">
            <div className="table-wrap-header">
              <span>route_table &middot; 6 entries</span>
              <span className="chip chip-gray">READ ONLY</span>
            </div>
            <table className="log-table">
              <thead>
                <tr>
                  <th>method</th>
                  <th>uri</th>
                  <th>controller</th>
                  <th>middleware</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="chip chip-blue">GET</span></td>
                  <td>/</td>
                  <td>IndexController@show</td>
                  <td>web</td>
                  <td><span className="chip chip-green">200</span></td>
                </tr>
                <tr>
                  <td><span className="chip chip-amber">POST</span></td>
                  <td>/register</td>
                  <td>AuthController@register</td>
                  <td>web, throttle:5,1</td>
                  <td><span className="chip chip-green">200</span></td>
                </tr>
                <tr>
                  <td><span className="chip chip-blue">GET</span></td>
                  <td>/confirm/&#123;token&#125;</td>
                  <td>AuthController@confirm</td>
                  <td>web</td>
                  <td><span className="chip chip-amber">SLOW</span></td>
                </tr>
                <tr>
                  <td><span className="chip chip-amber">POST</span></td>
                  <td>/login</td>
                  <td>AuthController@login</td>
                  <td>web, guest</td>
                  <td><span className="chip chip-green">200</span></td>
                </tr>
                <tr>
                  <td><span className="chip chip-blue">GET</span></td>
                  <td>/dashboard</td>
                  <td>DashController@index</td>
                  <td>web, auth</td>
                  <td><span className="chip chip-red">403</span></td>
                </tr>
                <tr>
                  <td><span className="chip chip-red">DELETE</span></td>
                  <td>/user/&#123;id&#125;</td>
                  <td>UserController@destroy</td>
                  <td>web, auth, admin</td>
                  <td><span className="chip chip-grey">N/A</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}