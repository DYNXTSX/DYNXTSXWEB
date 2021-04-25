var allProjets = [];


function gestionAll(){
	createProjects();
}

function Projet(nom, description, annee, context){
	this.nom = nom;
	this.description = description;
	this.annee = annee;
	this.context = context;
	this.test = function() {
		alert(this.nom);
	};
}

function createProjects(){
	var p1 = new Projet('School RPG', '', 2020, '');
	var p2 = new Projet('Netflix Remake', '', 2020, '');
	var p3 = new Projet('Jeu Swish', '', 2020, '');
	var p4 = new Projet('Site Web', '', 2020, '');
	var p5 = new Projet('Gestion de logements', '', 2020, '');
}
