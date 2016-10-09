<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta content="width=device-width,  initial-scale=1.0" name="viewport">
<title>User page</title>

<script src="<c:url value="/resources/js/lib/jquery/jquery-3.1.1.min.js" />"></script>
<script src="<c:url value="/resources/js/lib/web-socket/sockjs-0.3.min.js" />"></script>
<script src="<c:url value="/resources/js/lib/web-socket/stomp.min.js" />"></script>

<script src="<c:url value="/resources/js/user.js" />"></script>
</head>

<body>
    <div>
        <div style="padding-bottom: 10px;">
            <label for="message">Message: </label>
            <input id="message" />
        </div>
        <div>
            <button id="send">Send</button>
        </div>
    </div>

    <input id="contextPath" type="hidden" value="${pageContext.request.contextPath}" />
</body>
</html>