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
        });
    }

    function disconnect() {
        if (stompClient != null) {
            stompClient.disconnect();
        }
    }

    function show(data) {
        $('#messages').append(new Date(data.date) + " " + data.message + '\n');
    }

    $('#connect').click(function() {
        connect();
        $('#connect').prop('disabled', true);
        $('#disconnect').prop('disabled', false);
        return false;
    });

    $('#disconnect').click(function() {
        disconnect();
        $('#connect').prop('disabled', false);
        $('#disconnect').prop('disabled', true);
        return false;
    });

    $('#clear').click(function() {
        $('#messages').text('');
        return false;
    });

});