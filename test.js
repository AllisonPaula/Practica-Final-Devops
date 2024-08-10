const fs = require('fs');
const htmlparser = require('htmlparser2');

fs.readFile('index.html', 'utf8', (err, data) => {
  if (err) throw err;

  const parser = new htmlparser.Parser({
    onopentag(name) {
      if (name === 'h1') {
        console.log('Página contiene un <h1>!');
      }
    },
  }, { decodeEntities: true });

  parser.write(data);
  parser.end();
});
