var alunos = []
var indice = 0
var finish = false

    function adicionar(event) {
        event.preventDefault();

        alunos[indice] = {
            "nome_aluno": document.getElementById('nome_aluno').value,
            "primeiro_semestre": document.getElementById('primeiro_semestre').value,
            "segundo_semestre": document.getElementById('segundo_semestre').value,
            "frequencia": document.getElementById('frequencia').value
        };

        indice++;

        finish = confirm('Aluno adicionado. Deseja finalizar?');

        if(finish){
            document.getElementById('tabela_notas').hidden = false
            for(let aluno of alunos){

                var tbody = document.getElementsByTagName('tbody')[0]
                var row = tbody.insertRow(0)
                var content = "<tr>"

                for(let info_key = 0; info_key < 4; info_key++){ 
                    content += "<td>"+aluno[Object.keys(aluno)[info_key]]+"</td>"
                }

                content+= "</tr>"

                var aprovado = (parseFloat(aluno['primeiro_semestre']) + parseFloat(aluno['segundo_semestre']))/2 >= 6;

                row.bgColor = aprovado ? 'green' : 'red'

                row.innerHTML = content
            }
            
            alunos = []
            indice = 0
        }
        formulario.reset();
    }