.<html>
    <head>
        <title>Liff Web</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!--<script src="liff-starter.js"></script> -->
        <script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script>
            
        
        function onSubmit(e) {
            e.preventDefault();
            $(document).ready(function() {
                $.ajax({
                    type: "POST",
                    dataType: "text", 
                    url: "https://aqueous-everglades-49247.herokuapp.com/liff",
//                     
   
                    contentType: "application/json; charset=utf-8",

                    success: function(res) {
                        alert(res);
                        
                        liff.init();
                        liff.sendMessages([{
                            type: 'text',
                            text: res
                        }]).then(function() {
                            liff.closeWindow();
                        }).catch(function(error) {
                            window.alert("Error sending message: " + error);
                        });
                    },
                    error: function(res) {
                        alert("เกิดข้อผิดพลาด " + res);
                    }
                });
            });
        };
    </script>
    </head>
        <body>
            <div class="regisbox">
                <img src="https://cdn.icon-icons.com/icons2/582/PNG/512/man-2_icon-icons.com_55041.png" class="avatar">
                <h1>กรอกข้อมูลของท่าน</h1>
                <form>
                    <p>ชื่อสาขา</p>
                    <input type="text" name="bchcode" id="bchcode" placeholder="Enter you Branch">
                    <p>วันที่เริ่มต้น</p>
                    <input type="date" name="date_start" id="date_start" >
                    <p>วันที่สิ้นสุด</p>
                    <input type="date" name="date_stop" id="date_stop">
                    <input type="submit" id="sendmessagebutton" value="Submit" onclick="onSubmit(event);" >
                </form>
            </div">
        </body>
</html>
