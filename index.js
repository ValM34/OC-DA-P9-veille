fetch('https://blog.pascal-martin.fr/index.xml')
  .then(response => response.text())
  .then(xml => {
    // Traiter le XML ici
    console.log(xml);
  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la récupération du flux RSS :', error);
  });
