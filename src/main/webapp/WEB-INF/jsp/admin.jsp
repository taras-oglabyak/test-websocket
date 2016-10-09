<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Admin page</title>

<script src="<c:url value="/resources/js/lib/jquery/jquery-3.1.1.min.js" />"></script>
<script src="<c:url value="/resources/js/lib/web-socket/sockjs-0.3.min.js" />"></script>
<script src="<c:url value="/resources/js/lib/web-socket/stomp.min.js" />"></script>

<script src="<c:url value="/resources/js/admin.js" />"></script>
</head>

<body>
    <div style="padding-bottom: 10px;">
        <button id="connect">Connect</button>
        <button id="disconnect" disabled>Disconnect</button>
        <button id="clear">Clear</button>
    </div>
    <div>
        <textarea rows="20" cols="100" id="messages"></textarea>
    </div>
    <input id="contextPath" type="hidden" value="${pageContext.request.contextPath}" />
</body>
</html>