

function main(input_path)

{



//get_oauth();

/*
var obj_event=get_event(input_path );

document.write('obj_event.count  ' + obj_event.count+ '<br/>');
document.write('obj_event.events[0].node ' + obj_event.events[0].node+ '<br/>');
document.write('obj_event.events[0].description.commits[0].description ' + obj_event.events[0].description.commits[0].description+ '<br/>');
*/

var obj_changesets=get_changesets(input_path );

document.write('obj_changesets.count   ' + obj_changesets.count+ '<br/>');
document.write('obj_changesets.changesets[0].node ' + obj_changesets.changesets[0].node+ '<br/>');
document.write('obj_changesets.changesets[0].files[0].type  ' + obj_changesets.changesets[0].files[0].type+ '<br/>');
document.write('obj_changesets.changesets[0].utctimestamp  ' + obj_changesets.changesets[0].utctimestamp+ '<br/>');
document.write('obj_changesets.changesets[0].author  ' + obj_changesets.changesets[0].author+ '<br/>');
document.write('obj_changesets.changesets[0].parents[0]  ' + obj_changesets.changesets[0].parents[0]+ '<br/>');
document.write('obj_changesets.changesets[0].message  ' + obj_changesets.changesets[0].message+ '<br/>');
document.write('obj_changesets.changesets[0].size  ' + obj_changesets.changesets[0].size+ '<br/>');
document.write('obj_changesets.changesets[0].branches[0]  ' + obj_changesets.changesets[0].branches[0]+ '<br/>');

document.write('(obj_changesets.changesets[0].files).length  '+  (obj_changesets.changesets[0].files).length+ '<br/>'    );
//document.write('obj_changesets.changesets[20].node ' + obj_changesets.changesets[20].node+ '<br/>');


sta_rgb();


}