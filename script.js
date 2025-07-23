async function callApi(method) {
  const id = document.getElementById("idInstance").value.trim();
  const token = document.getElementById("apiTokenInstance").value.trim();
  if (!id || !token) return alert("Введите idInstance и apiTokenInstance");
  const url = `https://api.green-api.com/waInstance${id}/${method}/${token}`;
  const res = await fetch(url);
  const data = await res.json();
  document.getElementById("response").value = JSON.stringify(data, null, 2);
}

async function sendMessage() {
  const id = document.getElementById("idInstance").value.trim();
  const token = document.getElementById("apiTokenInstance").value.trim();
  const phone = document.getElementById("phone").value.trim() + "@c.us";
  const message = document.getElementById("message").value.trim();
  if (!id || !token || !phone || !message) return alert("Заполните все поля");

  const url = `https://api.green-api.com/waInstance${id}/sendMessage/${token}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chatId: phone, message })
  });
  const data = await res.json();
  document.getElementById("response").value = JSON.stringify(data, null, 2);
}

async function sendFileByUrl() {
  const id = document.getElementById("idInstance").value.trim();
  const token = document.getElementById("apiTokenInstance").value.trim();
  const phone = document.getElementById("filePhone").value.trim() + "@c.us";
  const urlFile = document.getElementById("fileUrl").value.trim();
  const fileName = urlFile.split('/').pop();

  if (!id || !token || !phone || !urlFile) return alert("Заполните все поля");

  const url = `https://api.green-api.com/waInstance${id}/sendFileByUrl/${token}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chatId: phone, urlFile, fileName })
  });
  const data = await res.json();
  document.getElementById("response").value = JSON.stringify(data, null, 2);
}
