const sh = require('shelljs');
sh.config.verbose = false;

const styleCssPath = 'css/style.css';
// sh.cd('../')
// sh.cd('../')

const styleCss = sh.cat(styleCssPath).toString();
const regex = /\/\* Extract.*?\*\/[\s\S]*?\/\* Extract end \*\//g;
const matches = styleCss.match(regex);

if (matches) {
  matches.forEach((match) => {
    const regex2 = /\/\* Extract(.*?)\*\//
    const filePath = match.match(regex2)[1].trim();
    // console.log(filePath);
    // console.log(sh.pwd().toString());
    sh.echo(match).to(filePath);
    // sh.touch('css');
    // console.log(match);
  });
}

// sh.echo(styleCss);
// sh.echo(sh.ls('.'))

