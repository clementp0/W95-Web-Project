<?php

$EmailFrom = "feedback@clpo.net";
$EmailTo = "clement.pommerie@gmail.com";
$Subject = "Feedback & Infos";
$Name = Trim(stripslashes($_POST['Name'])); 
$Tel = Trim(stripslashes($_POST['City'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Message = Trim(stripslashes($_POST['Message'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Tel: ";
$Body .= $Tel;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
    echo "<script language='javascript'>";
    echo 'alert("Thanks for your Feedback !");';
    echo 'window.location.href = "https://x.clpo.net"';
    echo "</script>";
}
else{
    echo "<script language='javascript'>";
    echo 'alert("Error.. Retry pls");';
    echo 'window.location.href = "https://x.clpo.net"';
    echo "</script>";
}
?>
