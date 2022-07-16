import { writeFileSync } from 'fs';
import { Octokit } from 'octokit';
import { resolve } from 'path';

const token = process.env.github_token;

const octokit = new Octokit({
  auth: token,
});

const excludeNames = ['Mob'];
const cwd = process.cwd();

const run = async () => {
  const { data } = await octokit.request('GET /user/repos', {
    affiliation: 'owner',
    per_page: 100,
    sort: 'updated',
  });
  const projects: any[] = data
    .filter((item) => !excludeNames.includes(item.name))
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .map((item) => {
      return {
        url: item.html_url,
        repo: item.name,
        username: item.owner.login,
        // desc: item.description || '',
        // stars: item.stargazers_count,
      };
    });
  const jsonStr = JSON.stringify(projects, null, 2);

  writeFileSync(resolve(cwd, './src/data/projects.json'), jsonStr);
};

run();
