import '../Welcome/welcome.css'



function Welcome() {
    return (

<div class="card">
<div class="card-body">
    <h1>Welcome (Name Renders Here)</h1>
<button class="btn btn-primary" type="button">Manage Subscription</button>
<button class="btn btn-primary" type="button">Add A Subscription</button>
<div id='thisMonth'>
    This is where the subscriptions due this month will render
</div>
<div class="btn-group">
<button type="button" class="btn btn-secondary btn-sm" id='tips'>Tips</button>
<button type="button" class="btn btn-secondary btn-sm" id='logout' >Logout</button></div>
</div>
</div>
  );
}

export default Welcome;