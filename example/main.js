var t_table= Handlebars.compile($("#list_tpl").html());
var url='http://127.0.0.1:8360/home/index/list';

var options={
	url:url,
	dataName:"data",
	totalName:"count",
	rowLimit:10,
	tpl:t_table,
	element:"#example_table"
};
var pp=new Table(options);