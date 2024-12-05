fetch("data.json")
  .then(rep => {
    return rep.json()
  })
  .then(donnee => {
    console.log(donnee)
    //  afficheInfos(donnee)
    // j'affiche les produits
    // donnee.produits est un tableau
    //je bouche sur le tableau et pour chacun des pproduit : je l'affiche
    donnee.produits.forEach(produit => {
      afficheUnProduit(produit)
    });
    donnee.clients.forEach(client => {
      afficheAvisClient(client)
    })
  })
  
function afficheInfos(info) {
  document.querySelector("#PalaisduChocolat").innerHTML = info.nomCommercial
}

function afficheUnProduit(p) {
  // ROle: affiche un produit dans la div qui a l'id "produits"
  //parametre : p, le produit a afficher
  // retour rien
  console.log(p.titre)
  console.log(p.presentation)
  console.log(p.imageurl)
  let template = `<div class="card-produits">
            <img src="${p.imageurl}" alt="" class="image">
            <h2>${p.titre}</h2>
            <p>${p.presentation}</p>
            <a href="" class="text bouton">Acheter</a>
        </div>`
  document.querySelector("#produits").innerHTML += template
}

function afficheAvisClient(c) {
  console.log(c.nom)
  console.log(c.typePrestation)
  console.log(c.commentaire)
  console.log(c.note)
  let template = `<div class="card-produits">
            <img src="assets/27448973-avatar-compte-icone-vecteur-defaut-social-medias-profil-photo-vectoriel.jpg" alt="" class="symboles">
            <h2>${c.nom}</h2>
            <p>${c.typePrestation}</p>
            <p>${c.commentaire}</p>
            <p>${c.note}</p>
        </div>`
  document.querySelector("#clients").innerHTML += template
              
}












