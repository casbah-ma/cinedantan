import {POSTERS_CDN, POSTERS_CDN_MOBILE, POSTERS_CDN_XS} from './constants'

export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
export const isIpad = /iPad/i.test(navigator.userAgent);
export const isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);
export function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
  
  // While there are elements in the array
    while (ctr > 0) {
  // Pick a random index
        index = Math.floor(Math.random() * ctr);
  // Decrease ctr by 1
        ctr--;
  // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
  
export function sortByKey(array, keyOne, keyTwo = '') {
    return array.sort(function(a, b) {
        var x = a[keyOne]; var y = b[keyOne];
        var z = a[keyTwo] || 1; var f = b[keyTwo] || 1;
        return ((x*z > y*f) ? -1 : ((x*z < y*f) ? 1 : 0));
    });
  }

export function imdbToMovie(imdb, movieArray) {
    if (!movieArray) return
    
    if (imdb && Array.isArray(imdb)) {
        return movieArray.filter(m=>imdb.indexOf(m.imdb)>-1)
    }
    return movieArray.filter(m=>m.imdb===imdb)[0]
}


export function idToPoster(identifier, array = false, type=false) {
    if(type === 'xs'){
        return POSTERS_CDN_XS+identifier+'.png'
    }

    if (array && !isIos) { // iOs do not support webp
        return [
            POSTERS_CDN + identifier + '.webp',
            POSTERS_CDN_MOBILE+identifier+'.png'
        ]
    }

    if (isIos) {
        return POSTERS_CDN_MOBILE+identifier+'.png'
    }
    
    return POSTERS_CDN_MOBILE+identifier+'.png'
}

export const moviesCategories = ["Sci-Fi", "Short", "Comedy", "Film-Noir",  "Biography", "Horror",  "Adventure", "Drama", "History", "Romance", "War", "Action", "Mystery", "Western", "Crime", "Thriller",  "Music",  "Family", "Musical", "Fantasy", "Documentary",  "Sport"]