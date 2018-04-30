$(function(){
      
   
     var cal2 = new Calendar(true, 0, false, true),
   
    date2 = document.getElementById('date-2'),
  
    cal2Mode = cal2.isHijriMode();

 
    document.getElementById('cal-2').appendChild(cal2.getElement());
 
    cal2.show();
    setDateFields();


    cal2.callback = function() {
      if (cal2Mode !== cal2.isHijriMode()) {
        cal2Mode = cal2.isHijriMode();
      }
      else
    
      setDateFields();
    };

    function setDateFields() {

      date2.value = cal2.getDate().getDateString();
    }

    function showCal2() {
      if (cal2.isHidden()) cal2.show();
      else cal2.hide();
    }
        
})

