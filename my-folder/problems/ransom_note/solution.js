/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // ransomNote can't be longer than magazine 
    if (ransomNote.length > magazine.length) {
        return false;
    }
    
    // split magazine into array
    
    // loop over ransomNote
      // check if letter is in magazine
        // if it is continue loop and remove letter from magazine
        // if it isn't return false
    
    // if made it through the loop return true
    
    let magArray = magazine.split('');
    
    for (let i = 0; i < ransomNote.length; i++) {
        let index = magArray.indexOf(ransomNote[i]);
        if (index > -1) {
            magArray.splice(index, 1);
        } else {
            return false
        }
    }
    
    return true;
    
};