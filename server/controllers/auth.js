const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat").StreamChat;
const crypto = require("crypto");

require("dotenv").config();

const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;
const app_id = process.env.APP_ID;

const signup = async (req, res) => {
  try {
    const { fullName, username, password, phoneNumber } = req.body;

    const userId = crypto.randomBytes(6).toString("hex");

    const serverClient = connect(api_key, api_secret, app_id);

    const hashedPassword = await bcrypt.hash(password, 10);

    const token = serverClient.createUserToken(userId);

    res
      .status(200)
      .json({ token, fullName, username, userId, hashedPassword, phoneNumber });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const serverClient = connect(api_key, api_secret, app_id);
    const client = StreamChat.getInstance(api_key, api_secret);

    const { users } = await client.queryUsers({ name: username });

    if (users.lenght)
      return res.status(400).json({ message: `User not found` });

    const sucess = await bcrypt.compare(password, users[0].hashedPassword);

    const token = serverClient.createUserToken(users[0].id);

    if (sucess) {
      res.status(200).json({
        token,
        fullName: users[0].fullName,
        username,
        userId: users[0].id,
      });
    } else {
      res.status(400).json({ message: "Incorrect password" });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
};

module.exports = { signup, login };
