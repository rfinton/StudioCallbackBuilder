function buildQueryString(q) {
  var strings = {
    position: q.position,
    callback: q.callback,
    callbackName: q.callbackName,
    uri: q.uri,
    evt: q.evt
  };

  var response = '##InboundTouchPoint Callback="' + strings.callback + '" PURL="True" CallbackName="' + strings.callbackName + '" PurlPosition="' + strings.position + '" ##'
  
  if(strings.uri)
    response += '&uri=' + strings.uri;
    
  if(strings.evt)
    response += "&evt=" + strings.evt;

  return response;
}

document.querySelector('input[type="submit"]').addEventListener('click', function() {
  var inputs = {
    position: document.querySelector('#position').value,
    callback: document.querySelector('#callback').value,
    callbackName: document.querySelector('#callback_name').value,
    uri: document.querySelector('#uri').value,
    evt: document.querySelector('#evt').value
  };
  
  if(inputs.callback && inputs.callbackName) {
    var queryString = buildQueryString(inputs);
    document.querySelector('textarea').value = queryString;
    document.querySelector('button').classList.remove('hidden');
  }
});

document.querySelector('button').addEventListener('click', function() {
  var text = document.querySelector('textarea');
  text.removeAttribute('disabled');
  text.select();
  text.setSelectionRange(0, 99999);
  document.execCommand('copy');
  text.setAttribute('disabled', true);
  $('.toast').toast({delay: 3000});
  $('.toast').toast('show');
});