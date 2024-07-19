function proccess(code, device_id) {
  if (!(code && device_id)) {
    return;
  }
  const accessToken = VKID.Auth.exchangeCode(code, device_id);

  accessToken
    .then((data) => console.log("promise resolved >", data))
    .catch((error) => console.log("promise failed >", error));

  console.log({
    code,
    device_id,
    accessToken,
  });
}

window.addEventListener("message", (event) => {
  console.log("messageEvent >", event);
  if (event.data?.action?.startsWith("oauth2_authorize_response")) {
    console.log("> oauth2_authorize_response event", event.data?.payload);
    const code = event.data?.payload?.code;
    const device_id = event.data?.payload.device_id;

    proccess(code, device_id);
  }
});

const VKID = window.VKIDSDK;

const CLIENT_ID = 52002005;
const REDIRECT_URL = "https://ds-kirillov-vk-team.github.io/main.html";
VKID.Config.init({
  app: CLIENT_ID,
  redirectUrl: REDIRECT_URL,
  state: "dj29fnsadjsd82",
  codeVerifier: "FGH767Gd65",
  codeChallenge:
    "3552ec339a6a2f801a9f3cf92df36374c2784a61e43b76534c58cbd9edf85287",
  mode: VKID.ConfigAuthMode.InNewTab,
});

const params = new URL(location).searchParams;
const code = params.get("code");
const device_id = params.get("device_id");
proccess(code, device_id);
