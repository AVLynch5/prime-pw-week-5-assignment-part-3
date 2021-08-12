console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, tracksArr) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracksArr,
  };
  collection.push(newAlbum);
  return newAlbum;
}//end addToCollection

//Time to test addToCollection
console.log('Adding album to the collection:', addToCollection('Appetite for Destruction','Guns N Roses', '1987', [{name: 'Welcome to the Jungle', duration: '4m31s'}, {name: 'Nighttrain', duration: '4m26s'}, {name: 'Rocket Queen', duration: '6m13s'}]));
console.log('Adding album to the collection:', addToCollection('Inside','Bo Burnham', '2021', [{name: 'Bezos I', duration: '0m59s'}]));
console.log('Adding album to the collection:', addToCollection('Cloud Nine','Kygo', '2016', [{name: 'Firestone', duration: '4m35s'}]));
console.log('Adding album to the collection:', addToCollection('Aerosmith','Aerosmith', '1973', [{name: 'Dream On', duration: '4m28s'}]));
console.log('Adding album to the collection:', addToCollection('Still in Love with You','Al Green', '1972', [{name: 'Love and Happiness', duration: '5m07s'}]));
console.log('Adding album to the collection:', addToCollection('Discovery','Daft Punk', '2001', [{name: 'Digital Love', duration: '4m58s'}, {name: 'One More Time', duration: '5m20s'}]));
console.log(collection);

function showCollection(array) {
  console.log('Number of albums in the collection is:', array.length);
  for (let x of array) {
    console.log(x.title, 'by', x.artist + ', published in', x.yearPublished);
    for (i=1; i<x.tracks.length+1; i++) {
      console.log(i+'.', 'NAME:', x.tracks[i-1].name+', DURATION:', x.tracks[i-1].duration);
    }
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

function search(object) {
  let resultsArr = [];
  if (!object) {
    return collection;
  }
  for (let x of collection) {
    if (x.tracks) {
      for (i=0; i<x.tracks.length; i++) {
        if (x.tracks[i].name == object) {
          resultsArr.push(x);
          return resultsArr;
        }
      }
    }
  }
  if (!object.artist || !object.yearPublished) {
    return collection;
  }
  for (i=0;i<collection.length;i++) {
    if (object.artist === collection[i].artist && object.yearPublished == collection[i].yearPublished) {
      resultsArr.push(collection[i]);
    }
  }
  return resultsArr;
}//end search

//Test search
console.log(search());
console.log(search({artist: 'Ray Charles'}))
console.log(search({artist: 'Ray Charles', yearPublished: '1957' }));
console.log(search({artist: 'Guns N Roses', yearPublished: '1987' }));
console.log(search({artist: 'Guns N Roses', yearPublished: 1987 }));
console.log(search('Firestone'));

// expected === behavior
//primitive values:
//  string
//  boolean
//  number

// non-primitives: array, object containing primitive
// [string, string, string, string]
