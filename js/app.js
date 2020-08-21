// replace these values with those generated in your TokBox Account
var apiKey = '45828062';
var sessionId = '1_MX40NTgyODA2Mn5-MTU5Nzg0NTM2NjQ2M35ka1FqbHAzbXlyVVZZeFozZVVqMWgyNjh-UH4';
var token = 'T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9MzM3M2EyOTQyMDZlZDdlOTVhODU5NDMxMjkzMTlhZDMwOTk0MWZjZjpzZXNzaW9uX2lkPTFfTVg0ME5UZ3lPREEyTW41LU1UVTVOemcwTlRNMk5qUTJNMzVrYTFGcWJIQXpiWGx5VlZaWmVGb3paVlZxTVdneU5qaC1VSDQmY3JlYXRlX3RpbWU9MTU5Nzg0NjU4NSZub25jZT0wLjI1MTczOTc1NTAzODAwNTYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU5NzkzMjk4NQ==';

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here
initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}