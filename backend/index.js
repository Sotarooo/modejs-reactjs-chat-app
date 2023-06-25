const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username:username, secret:username, first_name:username},
        {headers:{ "private-key":"0fb3ad81-f4d4-489d-9a34-d27bef924cf5"}}
    );
    return res.status(r.status).json(r.data);
  }catch(e){
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);