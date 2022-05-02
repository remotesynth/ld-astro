import LaunchDarkly from "launchdarkly-node-server-sdk";
const client = LaunchDarkly.init(import.meta.env.LAUNCHDARKLY_SDK_KEY);

export default async function () {
  await client.waitForInitialization();
  return client;
}
