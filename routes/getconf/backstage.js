function backstage (req,res){

	res.render('backstages/index', { title: 'Express' });
}

module.exports = backstage;