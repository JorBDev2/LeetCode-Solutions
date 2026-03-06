/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

    const minLength = Math.min(word1.length, word2.length);
    const remaining = word1.length >= word2.length? word1.slice(minLength) : word2.slice(minLength);
    let result = []; // Usamos un arreglo para evitar el problema de inmutabilidad

    // Bucle limpio: sabemos que ambos tienen caracteres aquí
    for (let i = 0; i < minLength; i++) {
        result.push(word1[i], word2[i]);
    }

    return result.join('') + remaining;
};