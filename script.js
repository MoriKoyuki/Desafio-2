function main(){
    const cep = document.querySelector('.cep').value;
    const rua = document.querySelector('.rua');
    const bairro = document.querySelector('.bairro');
    const cidade = document.querySelector('.cidade');
    const estado = document.querySelector('.estado');
    const submit = document.querySelector('.submit');

    submit.addEventListener('click', async (e) => {
        e.preventDefault();
        const search = cep.replace('-', '');
        if(search.length !== 8) alert('CEP inválido');
        else{
            const url = `http://viacep.com.br/ws/${search}/json/`;
            const options = {
                method: 'GET',
                mode: 'no-cors',
                cache: 'default'
            }
            try{
                const response = await fetch(url, options);
                const data = await response.json();
                rua.value = data.logradouro;
                bairro.value = data.bairro;
                cidade.value = data.localidade;
                estado.value = data.uf;
            }
            catch(e){
                alert(e);
            }
        }
    });
}
main();