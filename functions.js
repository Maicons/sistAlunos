function send(){

	var id = document.getElementById("id");
	var nome = document.getElementById("nome");
	var status = document.getElementById("status");


	alert(id.value);
	alert(nome.value);
	alert(status.value);

	return false;

}

function setTemplate(option){

	if(option == 1){

		document.getElementById("container-form").style.display ='block';

	}
	else{

		document.getElementById("dados-cadastro").style.display = 'block';

	}
	
}
function cadastrar(){

	var nome  = document.getElementById("c_id").value;
	var email = document.getElementById("c_nome").value;
	var senha = document.getElementById("c_status").value;

	document.getElementById("c-id").innerHTML  = nome;
	document.getElementById("c-nome").innerHTML = email;
	document.getElementById("c-status").innerHTML = senha;

	document.getElementById("dados-cadastro").style.display = 'block';
	
	return false;

}