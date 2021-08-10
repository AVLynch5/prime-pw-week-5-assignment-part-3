console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(newAlbum);
  return newAlbum;
}//end addToCollection

//Time to test addToCollection
console.log('Adding album to the collection:', addToCollection('Appetite for Destruction','Guns N Roses', '1987'));
console.log('Adding album to the collection:', addToCollection('Inside','Bo Burnham', '2021'));
console.log('Adding album to the collection:', addToCollection('Cloud Nine','Kygo', '2016'));
console.log('Adding album to the collection:', addToCollection('Aerosmith','Aerosmith', '1973'));
console.log('Adding album to the collection:', addToCollection('Still in Love with You','Al Green', '1972'));
console.log('Adding album to the collection:', addToCollection('Discovery','Daft Punk', '2001'));
console.log(collection);

function showCollection(array) {
  console.log('Number of albums in the collection is:', array.length);
  for (i=0; i<array.length; i++) {
    console.log(array[i].title, 'by', array[i].artist + ', published in', array[i].yearPublished);
  }
}//end showCollection

//Time to test showCollection
showCollection(collection);

function findByArtist(ArtistString) {
  let resultsArr = [];
  for (i=0; i<collection.length; i++) {
    if (collection[i].artist === ArtistString) {
      resultsArr.push(collection[i]);
    }
  }
  return resultsArr;
}//end findByArtist

//Test findByArtist
console.log('Artist search returned the following albums:', findByArtist('Kygo'));//expect 1 album object in results array
console.log('Artist search returned the following albums:', findByArtist('Black Sabbath'));//expect empty results array
console.log('Adding album to the collection:', addToCollection('Tron: Legacy','Daft Punk', '2010'));//adding a second album by Daft Punk to collection
console.log('Artist search returned the following albums:', findByArtist('Daft Punk'));//expect 2 album objects in results array
