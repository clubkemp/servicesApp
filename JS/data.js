alert("This alert box was called with the onload event");

var options = {
    valueNames: [ 'program', 'organization', 'addDesc', 'address', 'phone', 'web', 'services', 'target', 'hours' ],
    // Since there are no elements in the list, this will be used as template.
    item: '<li><h3 class="program"></h3><p class="organization"></p><p class="addDesc"></p><p class="address"></p><p class="phone"></p><p class="web"></p><p class="services"></p><p class="target"></p><p class="hours"></p></li>'
  };
  
  var values = [
    {
      program: 'Behavioral Health Inpatient Center',
      organization: 'PeaceHealth St. Josephs Medical Center',
      addDesc:'behind the test test',
      address:'2901 Squalicum Parkway , Bellingham, WA 98225',
      lat:48.77346,
      long:-122.47367,
      phone:'(360)734-5400',
      web:'https://www.peacehealth.org/st-joseph/services/behavioral-health/Pages/inpatient-center',
      services:'mental health; test',
      target:'people of age test',
      hours:'M-F 8-9',
      varified:'Y' 
    },
    {
        program: 'Jonnys bomb services',
        organization: 'PeaceHealth',
        addDesc:'test',
        address:'2901 Squalicum Parkway , Bellingham, WA 98225',
        lat:48.77346,
        long:-122.47367,
        phone:'(360)734-5400',
        web:'https://www.peacehealth.org/st-joseph/services/behavioral-health/Pages/inpatient-center',
        services:'Foo Bar; Homeing beacon',
        target:'Woman',
        hours:'M-F 8-9',
        varified:'Y' 
      },
    
  ];
  
  var userList = new List('users', options, values);
  
  userList.add({
    name: 'Gustaf Lindqvist',
    born: 1983
  });