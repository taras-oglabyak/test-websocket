$(function() {

    var stompClient = null;
    var contextPath = $('#contextPath').val();

    function connect() {
        var socket = new SockJS(contextPath + '/websocket');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function(frame) {
            stompClient.subscribe('/queue', function(response) {
                show(JSON.parse(response.body));
            });
            setConnected(true);
        });
    }

    function disconnect() {
        if (stompClient != null) {
            stompClient.disconnect();
            setConnected(false);
        }
    }

    function show(data) {
        $('#messages').append(new Date(data.date) + " " + data.message + '\n');
    }

    $('#connect').click(function() {
        connect();
        return false;
    });

    $('#disconnect').click(function() {
        disconnect();
        return false;
    });

    $('#clear').click(function() {
        $('#messages').text('');
        return false;
    });
    
    function setConnected(connected) {
        $('#connect').prop('disabled', connected);
        $('#disconnect').prop('disabled', !connected);
    }

});