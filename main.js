window.addEventListener("message", (data) =>
  console.log("messageEvent >", data)
);

const VKID = window.VKIDSDK;

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
