console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, tracksArr) {//updated with stretch goal - add tracks parameter
  let newAlbum = {//creates local object with name newAlbum
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracksArr,
  };
  collection.push(newAlbum);//object newAlbum gets added to the end of the collection array
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

function showCollection(array) {//updated for stretch goals - lists track names and duration after album info
  console.log('Number of albums in the collection is:', array.length);//displays the number of album objects in collection
  for (let x of array) {//for of loop - for each album object in collection
    console.log(x.title, 'by', x.artist + ', published in', x.yearPublished);//displays album object info - title, artist, yrpublished
    for (i=1; i<x.tracks.length+1; i++) {//nested for loop to iterate through x.tracks (nested array of tracks objects).
      console.log(i+'.', 'NAME:', x.tracks[i-1].name+', DURATION:', x.tracks[i-1].duration);//For loop iterates starting at i=1 to allow for list-style track output
    }
  }
}//end showCollection

//Time to test showCollection
showCollection(collection);//tests showCollection

function findByArtist(ArtistString) {
  let resultsArr = [];
  for (i=0; i<collection.length; i++) {
    if (collection[i].artist === ArtistString) {//if the string value collection[i].artist is strictly equal to the input artist string,
      resultsArr.push(collection[i]);//the album object at collection[i] is added to the results array
    }
  }
  return resultsArr;
}//end findByArtist

//Test findByArtist
console.log('Artist search returned the following albums:', findByArtist('Kygo'));//expect 1 album object in results array
console.log('Artist search returned the following albums:', findByArtist('Black Sabbath'));//expect empty results array
console.log('Adding album to the collection:', addToCollection('Tron: Legacy','Daft Punk', '2010'));//adding a second album by Daft Punk to collection
console.log('Artist search returned the following albums:', findByArtist('Daft Punk'));//expect 2 album objects in results array

function search(object) {//updated for stretch goals - can search by track name
  let resultsArr = [];
  if (!object) {//falsy statement - if no search input s/t object == undefined
    return collection;//returns array of all album objects
  }
  for (let x of collection) {//for of loops iterates through all album objects in collection array
    if (x.tracks) {//truthy statement - check to make sure an album object has an array of tracks before trying to search by trackname. If not, code moves on to the artist/yrpublished section
      for (i=0; i<x.tracks.length; i++) {
        if (x.tracks[i].name == object) {
          resultsArr.push(x);
          return resultsArr;//if an album object contains a track object with name == input trackname, the album object is added to the array of results and returned (skips artist/yr search)
        }
      }
    }
  }
  if (!object.artist || !object.yearPublished) {//falsy conditionals - search must include artist and yearPublished info, else the entirety of collection is displayed. Final check.
    return collection;
  }
  for (i=0;i<collection.length;i++) {
    if (object.artist === collection[i].artist && object.yearPublished == collection[i].yearPublished) {//and conditional - if there is a match for both artist & yrpublished, the album object is added to the results array. If no matches are found, the results array is returned empty.
      resultsArr.push(collection[i]);
    }
  }
  return resultsArr;
}//end search

//Test search
console.log(search());//expect collection - no search object
console.log(search({artist: 'Ray Charles'}))//expect collection - no yrpublished
console.log(search({artist: 'Ray Charles', yearPublished: '1957' }));//expect empty array - no matching album in collection
console.log(search({artist: 'Guns N Roses', yearPublished: '1987' }));//expect matching result - both artist and yrpublished string
console.log(search({artist: 'Guns N Roses', yearPublished: 1987 }));//expect matching result - both artist and yrpublished integer
console.log(search('Firestone'));//expect matching result - matches trackname in Kygo's cloud nine album

// expected === behavior
//primitive values:
//  string
//  boolean
//  number

// non-primitives: array, object containing primitive
// [string, string, string, string]

//8-12-21 holy crap I've gotta comment these stretch goals before I forget how I nested these for loops
