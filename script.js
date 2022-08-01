function main(){
    const cep = document.querySelector('.cep');
    const rua = document.querySelector('.rua');
    const bairro = document.querySelector('.bairro');
    const cidade = document.querySelector('.cidade');
    const estado = document.querySelector('.estado');
    const submit = document.querySelector('.submit');

    submit.addEventListener('click', async () => {
        const search = cep.replace('-', '');
        if(search.length !== 8) alert('CEP inválido!');
        else{
            const response = await fetch(`http://viacep.com.br/ws/${search}/json/`);
            const data = await response.json();
            rua.value = data.logradouro;
            bairro.value = data.bairro;
            cidade.value = data.cidade;
            estado.value = data.estado;
        }
    }
    );
}
main();