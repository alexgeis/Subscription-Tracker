import '../NewSub/newSub.css'



$('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '-3d'
});



function NewSub() {
    return (

<div className="card">  
<div className="card-body">
<div class="input-group date" data-provide="datepicker">
    <input type="text" class="form-control"/>
    <div class="input-group-addon">
        <span class="glyphicon glyphicon-th"></span>
    </div>
</div>
</div>
</div>
);
}

export default NewSub;