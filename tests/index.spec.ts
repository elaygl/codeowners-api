import {Codeowner} from '../src/index';
import * as teamNames from '../src/githubApi/getUserTeamsNames';

test('basic flow', async () => {
    const params = {repo: '', owner: ''};
    const codeOwnersApi = new Codeowner(params);
    const result = await codeOwnersApi.filterForCodeOwner(
        ['/something/a.py', 'tests/something.js', 'tests/something.txt', 'packages/some/deep/dir/index.tsx'],
        '@elaygl'
    );

    expect(result.length).toEqual(2);
});
