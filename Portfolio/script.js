function irParaSecao(secaoId) {
    const secao = document.getElementById(secaoId);

    if (secao) {
        secao.scrollIntoView({ behavior: 'smooth' });
    }
}



