<?php
global $SystemAlertMsgQueque;
// display system alert window if messages are available
if(count($SystemAlertMsgQueque) > 0) {
    include "sysalert.display.inc.php";
}
?>
<script type='text/javascript'>
    document.body.addEventListener('keydown', function(e) {
        if((e.which === 115 || e.which === 83 ) && (e.ctrlKey || e.metaKey) && !e.altKey) {
            var Button1 = document.querySelector('a#Button1') || document.querySelector('#Button1 > a');
            if(Button1) Button1.click();
            e.preventDefault()
        }
    });
</script>
<?php
if(in_array($modx->getManagerApi()->action, array(
    85,
    27,
    4,
    72,
    13,
    11,
    12,
    87,
    88
))) {
    echo $modx->getManagerApi()->loadDatePicker($modx->config['mgr_date_picker_path']);
}
?>
@include('manager::partials.debug')
</body>
</html>
<!-- end footer -->
