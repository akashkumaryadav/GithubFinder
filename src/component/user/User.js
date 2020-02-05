import React from "react";
import { Link } from "react-router-dom";
import Repos from "./Repos";
import Spinner from "../layout/Spinner";

export class User extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
    this.props.getUserGists(this.props.match.params.login);
  }

  render() {
    const {
      avatar_url,
      bio,
      //   blog,
      company,
      //   email,
      followers,
      following,
      hireable,
      html_url,
      //   id,
      //   location,
      login,
      name,
      public_gists,
      public_repos
      //   repos_url
    } = this.props.user;

    if (this.props.loding) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-8 col-md-12 col-sm-12 "
                style={{ paddingTop: "10%" }}
              >
                <div
                  className="card mb-3 shadow pb-4"
                  style={{ maxWidth: "", margin: "5% 10% 10% 10%" }}
                >
                  <div className="row no-gutters">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <img
                        src={avatar_url}
                        className="card-img p-1"
                        alt={login}
                      />

                      <div className="btn-group m-2" role="group">
                        <div className="btn btn-sm btn-warning ">
                          Followers {followers}
                        </div>
                        <div className="btn btn-sm btn-primary">
                          Following {following}
                        </div>
                      </div>
                      <div className="btn-group m-2" role="group">
                        <div className="btn btn-sm btn-success">
                          pRepo {public_repos}
                        </div>
                        <div className="btn btn-sm btn-danger">
                          pGists {public_gists}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 pl-5">
                      <div className="card-body">
                        <h5 className="card-title">
                          <em>{name}</em>
                        </h5>
                        <p className="card-text">{bio}</p>
                        <p className="card-text">
                          <small className="text-muted">
                            <strong>
                              Compony:
                              {company != null ? (
                                company
                              ) : (
                                <i
                                  className="fas fa-exclamation-triangle"
                                  style={{ color: "red" }}
                                ></i>
                              )}
                            </strong>
                            <small />
                            <br></br>
                            <strong>
                              Hireable:{" "}
                              {hireable != null ? (
                                <i
                                  className="fas fa-check"
                                  style={{ color: "green" }}
                                ></i>
                              ) : (
                                <i
                                  className="fas fa-exclamation-triangle"
                                  style={{ color: "red" }}
                                ></i>
                              )}
                            </strong>
                          </small>
                        </p>
                        <div></div>
                        <Link to="/">BackToSearch</Link>
                        <br></br>
                        <a className="bottom-fixed" href={html_url}>
                          Visit Github Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-12 col-sm-12"
                style={{ paddingTop: "10%" }}
              >
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col" className="text-center">
                        Popular Repos
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <Repos repos={this.props.repos} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default User;
