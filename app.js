const express = require('express');
const path = require('path');
const { title } = require('process');
const pdfjs = require('pdfjs-dist-legacy')



/* const t = pdfjs.getDocument('https://www.examinations.ie/docs/schoolscirculars/EN-1011-72060786.pdf');
  async function pageMaker() {await t.promise.then(async function (doc) {
    const page = await doc.getPage(1)
    return page
    console.log('got doc');
    console.log(doc); 
  })
  .catch(err => {
    console.log(err);
  })};

  const page = pageMaker()
  console.log(page)
*/
 const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

/*  app.get('/', (req, res) => {
  res.send(page)
})  */
app.get('/', (req, res) => {
    res.render('index', {
    })
})
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});






