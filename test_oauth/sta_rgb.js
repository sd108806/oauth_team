




function sta_rgb()

{
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

var w=change_unit_rgb.r+1;

console.log('w is '+w);

for (int i=0; i<obj_changesets.limit;i++)
{

for(int j=0;j<(obj_changesets.changesets[i].files).length;j++)
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

for (int i=0;i<obj_changesets.limit;i++)
document.write( 'sta_arr_rgb[i].rgb '+i+' ' +sta_arr_rgb[i].r+' '+sta_arr_rgb[i].g+' '+sta_arr_rgb[i].b+ '<br/>');

return sta_arr_rgb;

}