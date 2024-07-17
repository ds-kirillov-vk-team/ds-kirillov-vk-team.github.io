console.log("я тут");

const VKID = window.VKIDSDK;
const CLIENT_ID = 52002005;
const REDIRECT_URL = "https://ds-kirillov-vk-team.github.io/";

VKID.Config.init({
  app: CLIENT_ID, // Идентификатор приложения.
  redirectUrl: REDIRECT_URL, // Адрес для перехода после авторизации.
  state: "dj29fnsadjsd82", // Произвольная строка состояния приложения.
  codeVerifier: "FGH767Gd65", // Верификатор в виде случайной строки. Обеспечивает защиту передаваемых данных.
  //   scope: 'email phone', // Список прав доступа, которые нужны приложению.
  mode: VKID.ConfigAuthMode.InNewTab, // По умолчанию авторизация открывается в новой вкладке.
});

// Создание экземпляра кнопки.
const oneTap = new VKID.OneTap();

// Получение контейнера из разметки.
const container = document.getElementById("VkIdSdkOneTap");

const handleError = (e) => {
  console.log(e);
};

// Проверка наличия кнопки в разметке.
if (container) {
  // Отрисовка кнопки в контейнере с именем приложения APP_NAME, светлой темой и на русском языке.
  oneTap
    .render({
      container: container,
      scheme: VKID.Scheme.LIGHT,
      lang: VKID.Languages.RUS,
    })
    .on(VKID.WidgetEvents.ERROR, handleError); // handleError — какой-либо обработчик ошибки.
}
