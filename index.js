const VKID = window.VKIDSDK;

const params = new URL(location).searchParams;
const code = params.get("code");
const device_id = params.get("device_id");

const accessToken = VKID.Auth.exchangeCode(code, device_id);

console.log({
  code,
  device_id,
  accessToken,
});
