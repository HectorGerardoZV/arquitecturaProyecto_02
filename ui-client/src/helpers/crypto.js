import * as crypto from "crypto-js"
const decrypt = (data) => {
  try {
    const bytes  = crypto.AES.decrypt(data, "1234567890_!@#$%^&*()");
  var originalText = bytes.toString(crypto.enc.Utf8);
  console.log(originalText);
  return ""
  } catch (error) {
    console.log(error);
  }
}

export default decrypt