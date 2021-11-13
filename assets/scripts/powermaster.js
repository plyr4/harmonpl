function roll() {

    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/harmonpl/actions/roll';
    Http.open("POST", url);
    Http.send();
    
    Http.onreadystatechange = (e) => {
      console.log(Http.responseText);
      location.reload();
    }
}