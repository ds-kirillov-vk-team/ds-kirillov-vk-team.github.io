window.addEventListener("message", (data) =>
  console.log("messageEvent >", data)
);

const VKID = window.VKIDSDK;

const CLIENT_ID = 52002005;
const REDIRECT_URL = "https://ds-kirillov-vk-team.github.io/main.html";
VKID.Config.init({
  app: CLIENT_ID, // Идентификатор приложения.
  redirectUrl: REDIRECT_URL, // Адрес для перехода после авторизации.
  state: "dj29fnsadjsd82", // Произвольная строка состояния приложения.
  codeVerifier: "FGH767Gd65", // Верификатор в виде случайной строки. Обеспечивает защиту передаваемых данных.
  //   scope: 'email phone', // Список прав доступа, которые нужны приложению.
  mode: VKID.ConfigAuthMode.InNewTab, // По умолчанию авторизация открывается в новой вкладке.
});

const params = new URL(location).searchParams;
const code = params.get("code");
const device_id = params.get("device_id");

const accessToken = VKID.Auth.exchangeCode(code, device_id);

accessToken
  .then((data) => console.log("promise resolved >", data))
  .catch((error) => console.log("promise failed >", error));

console.log({
  code,
  device_id,
  accessToken,
});
