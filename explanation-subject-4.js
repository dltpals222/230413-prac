function getCurrentDate() {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
      const root = document.getElementById("root");
      root.innerHTML = this.responseText;
    }
  });

  /*readyState의 상태는 0~4까지가 있다.
  0 UNSENT, 1 OPENED, 2 HEADERS_RECEIVED, 3 LOADING, 4 DONE*/

  xhr.open("GET", "/date");
  xhr.send();
}

setInterval(getCurrentDate, 1000);

//setInterval은 함수를 호출(getCurrentDate())하는 것이 아닌 참조(getCurrentDate)하는 방식을 사용한다.
