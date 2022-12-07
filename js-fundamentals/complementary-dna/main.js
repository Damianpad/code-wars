/*
PREP
Parameter: Return String
Return: String
'A' = 'T'
'C' = 'G'

complement: 'ATGC' => 'TACG'

Example:
function DNAStrand(str){
    for(i=0; i < str.length; i++){
        console.log(str)
    }
    return 
}

Pseduo:
Write Function that takes in a str
Loop through str to see if ATCG 
return complement
*/


function DNAStrand(dna){
    let result = ''
    for(i=0; i < dna.length; i++){
        if (dna[i] === 'A'){
            result = result + 'T'
        } else if (dna[i] === 'T'){
            result = result + 'A'
        } else if (dna[i] ===  'G'){
            result = result + 'C'
        } else {
            result = result + 'G'
        }
    }
    return result
}

DNAStrand('ATTGC')
DNAStrand('AAAA')
DNAStrand('TAGATTGCGCGCAG')


// Voted best Practice: 
function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }