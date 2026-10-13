let keyName=(document.querySelector('.insert'));

window.addEventListener('keydown',function(e){
    keyName.innerHTML=`
    <div class="color">
    <table border="1" cellpadding="10">
  <tr>
    <th>KEY</th>
    <th>KEYNAME</th>
  </tr>
  <tr>
    <td>${e.key===" "?"Space":e.key}</td>
    <td>${e.code.replace(/([a-z])([A-Z])/g,"$1 $2")}</td>
  </tr>
  </table>
  </div>
    `;
  });