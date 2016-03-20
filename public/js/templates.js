var templates = {};
templates.addUser = [

  `<div class="container-fluid navbar-left">
    <form class="form-inline" role="form" action="index.html" method="post">
      <div class="form-group">
        <input type="text" class="form-control username" name="username" placeholder="username">
        <input type="password" class="form-control password" name="password" placeholder="password">
      </div>
      <button type="submit" class="btn btn-info login">Login</button>
    </form>
  </div>
  <div class="container-fluid navbar-right">
    <form class="form-inline" role="form" action="index.html" method="post">
      <div class="form-group">
        <input type="text" class="form-control username" name="usernameC" placeholder="username">
        <input type="password" class="form-control password" name="passwordC" placeholder="password">
      </div>
      <button type="submit" class="btn btn-warning create">Create User</button>
    </form>
  </div>`


].join('');


templates.userModel =[
  `<div class="container-fluid welcome"><h1><%= name %> </h1> <button type="button" class="btn btn-danger logout">log out</button>
    <div class="container-fluid navbar-right">
      <button type="button" class="btn btn-default send">Send Message</button>
    </div>
  </div>`
].join('');

templates.loginFail =[
  `<div class="container-fluid fail"><h1>Username or password are not correct </h1>

  </div>`
].join('');

  templates.message= [
    `<div class="message panel-body">
      <h5></h5>
      <p></p>
      <p></p>
      <div class="btn-group msgBtns">
        <button type="button" class="btn btn-default play" name="play"><span class="glyphicon glyphicon-play"></span></button>
        <button type="button" class="btn btn-default" name="destroy"><span class="glyphicon glyphicon-trash"></span></button>
      </div>
    </div>`
  ].join('');
  templates.sendMsgForm= [
    `<form class="encrypt" role="form" action="index.html" method="post">

      <div class="form-group">
        <input type="text" class="form-control recipient" name="recipient" placeholder="recipient">

      </div>
      <div class="form-group">
        <input type="text" class="form-control hint" name="hint" placeholder="hint">
      </div>
      <div class="form-group">
        <input type="text" class="form-control message" name="message" placeholder="message">
      </div>
      <div class="btn-group sendMsgBtns">
        <button type="button" class="btn btn-info sendMsg">Send</button>
        <button type="button" class="btn btn-warning back">Back</button>
      </div>
    </form>`
  ].join('');
  templates.gamePage= [
    `<div class="encryption panel-body">
      <h4 class="scramble"><%= scramble %></h4>
    </div>
      <div class="message panel-body">
        <form class="decrypt" role="form" action="index.html" method="post">
          <div class="form-group dropInputs">
            <input type="text" class="form-control" name="input" placeholder="Decrypt the Message">
          </div>
          <div class="btn-group decryptBtns">
            <button type="submit" class="btn btn-info submit">Submit</button>
            <button type="button" class="btn btn-warning back">Back</button>
            <button type="button" class="btn btn-danger giveUp">Give Up</button>
          </div>
        </form>
      </div>`
  ].join('');
  templates.userDropdown= [
    `<option><%= username %></option>`
  ].join('');

  module.exports = templates;
