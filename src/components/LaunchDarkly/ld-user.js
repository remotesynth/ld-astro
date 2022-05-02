export default class User {
  constructor(
    client,
    key,
    secondary,
    ip,
    email,
    firstName,
    lastName,
    anonymous,
    os,
    device
  ) {
    this.client = client;

    if (!key) key = "anonymous";

    this.user = {
      key: key,
      secondary: secondary,
      ip: ip,
      email: email,
      firstName: firstName,
      lastName: lastName,
      anonymous: anonymous,
      os: os,
      device: device,
    };
  }

  async getFlagValue(key, callback) {
    let flagValue;

    if (!this.client) throw new Error("Client not defined");

    flagValue = await this.client.variation(key, this.user, false);

    if (callback) {
      this.client.on("update:" + key, async (keyName) => {
        const flagValue = await this.client.variation(
          keyName.key,
          this.user,
          false
        );
        callback(flagValue);
      });
    }
    return flagValue;
  }

  async closeClient() {
    if (this.client) {
      await this.client.close();
      this.client = null;
    }
  }
}
