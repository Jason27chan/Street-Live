<?php
require('template/top.php');
head('Home', true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script
    src="https://code.jquery.com/jquery-2.2.4.min.js"
    integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
    crossorigin="anonymous"></script>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    
    <script src="/frontend/profile_page.js"></script>
    <link rel="stylesheet" type="text/css" href="/frontend/profile_page.css">
    <link rel="stylesheet" type="text/css" href="../browse_page.css">
     
    <title>Profile Page</title>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-sm-6">
                <div class="description">
                    <img id="profile_picture" class="avatar" src="https://i.imgur.com/lMHGHYt.jpg">
                    <h1 id="name">The Fat Cat</h1>
                    <p id="bio">Fat. Cat.</p>
                    <p id="city" class="subtext">Atlanta, GA</p>
                    <p id="type" class="subtext">Animal</p>
                    <button type="button" class="btn btn-primary">Follow</button>
                    <button type="button" class="btn btn-outline-success">Donate</button>
                </div>
        </div>
    </div>
        <div id="feed">
            <!-- <div class="w3-panel w3-card-2">
                <p class="subtext">Friday 13th</p>
                <p class="">hello world</p>
            </div>
            <div class="w3-panel w3-card-2">
                    <p class="subtext">Friday 13th</p>
                    <p class="">hello world</p>
                </div> -->
        </div>
</body>
</html>

<?php
footer(false);
?>