let chaine="j'aime le poulet";
let nombre=420;
console.log(chaine);
console.log(nombre);

function premierefonction(parm1,parm2) {
    return parm1 + parm2;
}

console.log(premierefonction(45,"hello"));


function mult(parm1) {
    return parm1 * parm1;
}
console.log(mult(4))

function conca(parm1,parm2){
    return `Bonjour ${parm1+parm2}` ;
}
console.log(conca("poulet","roti"));

function mult2(nb1,nb2){
    let res=nb1*nb2;
    if (res<=0){
        return "le resultat n'est pas strictement positif";
    }
    else{
        return res;
    }
}
console.log(mult2(4,4))
console.log(mult2(4,-4))

function mult3(nb1, nb2) {
    let res = 0;
    if (nb1<0){
        for (let i = 0; i < nb2; i++) {
            res += nb1;
        }
    }
    if (nb2<0){
        for (let i = 0; i < nb1; i++) {
            res += nb2;
        }
    }
    return res;
}

console.log(mult3(-4,-2))

//partie 3 

function testIUT(chaine1) {

    const test = ["MMI", "GIM", "GEA"];
    for (let i=0;i<3;i++){
    if (chaine1 == test[i]){
        return `Bonjour ${chaine1}`
    }
    else{
        return "Bonjour mais ce département n'est pas proposé à l'IUT de la Guadeloupe"
    }
    }
}
console.log(testIUT("MMI"))

function age(entier){
    if (entier<=0){
        return "Vous n'existez pas"
    }
    if (entier<=1){
        return "Vous êtes un nourrisson"
    }
    if (entier >= 2 && entier <= 12){
        return "Vous êtes un enfant"
    }
    if (entier >= 13 && entier <= 17){
        return "Vous êtes un adolescent"
    }
    if (entier >= 18 && entier <= 60){
        return "Vous êtes un adulte"
    }
    if (entier>60){
        return "Vous êtes une personne agée"
    }
}

console.log(age(1))