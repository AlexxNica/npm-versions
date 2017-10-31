'use strict';
import * as url from 'url';
import * as got from 'got';
import * as registryUrl from 'registry-url';
import * as registryAuthToken from 'registry-auth-token';
import * as semver from 'semver';

export default (name: string, opts?: any): any => {
  const scope = name.split('/')[0];
  const regUrl = registryUrl(scope);
  const pkgUrl = url.resolve(regUrl, encodeURIComponent(name).replace(/^%40/, '@'));
  const authInfo = registryAuthToken(regUrl, { recursive: true });

  opts = Object.assign({
    version: 'latest'
  }, opts);

  const headers = {
    accept: 'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*',
    authorization: ''
  };

  if (opts.fullMetadata) {
    delete headers.accept;
  }

  if (authInfo) {
    headers.authorization = `${authInfo.type} ${authInfo.token}`;
  }

  return got(pkgUrl, { json: true, headers })
    .then(res => {
      let data = res.body;
      let version = opts.version;

      if (opts.allVersions) {
        return data;
      }

      if (data['dist-tags'][version]) {
        data = data.versions[data['dist-tags'][version]];
      } else if (version) {
        if (!data.versions[version]) {
          const versions = Object.keys(data.versions);
          version = semver.maxSatisfying(versions, version);

          if (!version) {
            throw new Error('Version doesn\'t exist');
          }
        }

        data = data.versions[version];

        if (!data) {
          throw new Error('Version doesn\'t exist');
        }
      }

      return data;
    })
    .catch(err => {
      if (err.statusCode === 404) {
        throw new Error(`Package \`${name}\` doesn't exist`);
      }

      throw err;
    });
};
