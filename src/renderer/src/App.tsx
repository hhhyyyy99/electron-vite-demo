import { Button } from "tea-component";
import { TUICallKit, TUICallKitServer, TUICallType } from "@tencentcloud/call-uikit-react";

const sdkappId = 20007828,
  userSig = "eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwsamhhZmJkbGULnilOzEgoLMFCUrIwMDA3MLIwuIeGpFQWZRqpKVoampKUgGIlqSmQsSMze0tDA0NrEwhZqRmQ40OMCzPNw92aMsMdc3zN-HySVG3zfIKCAzPSInwjglPCfRr9ivqCDX0zjHIKzYVqkWAPmvMTY_",
  userId = "35186423";

function App(): JSX.Element {
  const handleCall = async () => {
    await TUICallKitServer.call({
      userID: userId,
      type: TUICallType.AUDIO_CALL
    });
  };
  const beforeCalling = () => {
    console.log("beforeCalling");
  };
  const afterCalling = () => {
    console.log("afterCalling");
  };
  const handleInit = async ()=>{
    await TUICallKitServer.init({
      userID: userId,
      userSig: userSig,
      SDKAppID: Number(sdkappId)
    })
    alert('TUICallKit init succeed');
  }
  return (
    <>
      <TUICallKit
        allowedMinimized={true}
        allowedFullScreen={false}
        beforeCalling={beforeCalling}
        afterCalling={afterCalling} />
      <Button onClick={handleInit}>init</Button>
      <Button onClick={handleCall}>call</Button>
    </>
  );
}

export default App;
