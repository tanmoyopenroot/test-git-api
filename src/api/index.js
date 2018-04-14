import Request from 'superagent';
import config from './../config/app';

function buildErrorObject(e, res) {
  let err = e;
  if (!e && res.body.errors) {
    err = new Error(res.body.errors.message);
    err._rawJson = res.body.errors;
  }
  return err;
}

function getRepo(cb, query){
  Request.get(`${config.siteURL}/search/repositories?q=${query}`).end((e, res) => {
    const err = buildErrorObject(e, res);
    cb(err, res.body);
  });
}

export {
  getRepo
}