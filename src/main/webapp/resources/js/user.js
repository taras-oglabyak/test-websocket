$(function() {

    var stompClient = null;
    var contextPath = $('#contextPath').val();

    function connect(message) {
        var socket = new SockJS(contextPath + '/websocket');
        stompClient = Stomp.over(socket);

        stompClient.connect({}, function(frame) {
            if (socket.readyState == 1) {
                sendMessage(message);
                disconnect();
            }
        });
    }

    function disconnect() {
        if (stompClient != null) {
            stompClient.disconnect();
        }
    }

    function sendMessage(message) {
        stompClient.send("/app/sendMessage", {}, JSON.stringify({'message' : message}));
    }

    $('#send').click(function() {
        connect($('#message').val());
        return false;
    });

});