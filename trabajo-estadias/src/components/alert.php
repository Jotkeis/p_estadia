<?php
function alert( string $msg){
    echo "
      <script>
      Toastify({
        text: '$msg',
        duration: 1500,
        newWindow: true,
        close: false,
        gravity: 'top',
        position: 'right', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: '#c15050',
          borderRadius: '10px',
          opacity: '0.95'
        },
        onClick: function(){} // Callback after click
      }).showToast();
      </script>
      ";
  }
