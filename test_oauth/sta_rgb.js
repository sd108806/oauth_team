function sta_rgb(obj_changesets )
{

document.write('obj_changesets in sta_rgb fun'+ obj_changesets + '<br/>');

/*
var   obj_changesets={
'limit':2,
'changesets': [
{
'files':[{'type':'added',},]
},

{
'files':[ {'type':'added',}, {'type':'modified',}]

},


]
}
*/







zero_unit_rgb={
'r': 0,
'g': 0,
'b': 0,
};

change_unit_rgb={
'r': 0,
'g': 0,
'b': 0,
};

var sta_arr_rgb=new Array();



for (var i=0; i<obj_changesets.limit;i++)
{

for(var j=0;j<(obj_changesets.changesets[i].files).length;j++)
{
if(   obj_changesets.changesets[i].files[j].type=='added'     )
change_unit_rgb.r++;

if(   obj_changesets.changesets[i].files[j].type=='modified'     )
change_unit_rgb.b++;

if(   obj_changesets.changesets[i].files[j].type=='removed'     )
change_unit_rgb.g++;
}


sta_arr_rgb[i]=change_unit_rgb;
change_unit_rgb=zero_unit_rgb;
}

for (var i=0;i<obj_changesets.limit;i++)
{
document.write( 'sta_arr_rgb[i].rgb i= '+ i + '   ' +sta_arr_rgb[i].r+ ' '+sta_arr_rgb[i].g+ ' '+sta_arr_rgb[i].b+ '<br/>');
//console.log(  'sta_arr_rgb[i].rgb i= '+ i + '   ' +sta_arr_rgb[i].r+' '+sta_arr_rgb[i].g+' '+sta_arr_rgb[i].b+ '<br/>' );
}
return sta_arr_rgb;



}